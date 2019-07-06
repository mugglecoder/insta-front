import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMutation, useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import TextareaAutosize from "react-autosize-textarea";
import axios from "axios";
import FileUploadWithPreview from "file-upload-with-preview";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import useInput from "../../Hooks/useInput";
import { get } from "https";

const EDITPOST = gql`
  mutation editPost(
    $id: String!
    $action: ACTIONS
    $selectType: String
    $deposit: String
    $money: String
    $caption: String
    $files: [String]
    $content: String
    $airConditioner: Boolean
    $washer: Boolean
    $refrigerator: Boolean
    $internet: Boolean
    $microwave: Boolean
    $wifi: Boolean
    $bed: Boolean
    $desk: Boolean
    $induction: Boolean
    $gasRange: Boolean
    $doorLock: Boolean
    $CCTV: Boolean
    $pets: Boolean
    $elevator: Boolean
    $parking: Boolean
    $numberOfFoors: String
    $electricHeating: Boolean
    $cityGasHeating: Boolean
    $nightElectric: Boolean
    $wateTax: Boolean
    $includingElectricity: Boolean
    $cityGasIncluded: Boolean
    $MLSnumber: String
  ) {
    editPost(
      id: $id
      action: $action
      selectType: $selectType
      deposit: $deposit
      money: $money
      caption: $caption
      files: $files
      content: $content
      airConditioner: $airConditioner
      washer: $washer
      refrigerator: $refrigerator
      internet: $internet
      microwave: $microwave
      wifi: $wifi
      bed: $bed
      desk: $desk
      induction: $induction
      gasRange: $gasRange
      doorLock: $doorLock
      CCTV: $CCTV
      pets: $pets
      elevator: $elevator
      parking: $parking
      numberOfFoors: $numberOfFoors
      electricHeating: $electricHeating
      cityGasHeating: $cityGasHeating
      nightElectric: $nightElectric
      wateTax: $wateTax
      includingElectricity: $includingElectricity
      cityGasIncluded: $cityGasIncluded
      MLSnumber: $MLSnumber
    ) {
      id
      count
      numberOfFoors
      MLSnumber
      deposit
      money
      content
      caption
      airConditioner
      washer
      refrigerator
      internet
      microwave
      wifi
      bed
      desk
      induction
      gasRange
      doorLock
      CCTV
      pets
      elevator
      parking
      electricHeating
      cityGasHeating
      nightElectric
      wateTax
      includingElectricity
      cityGasIncluded
      selectType
      comments {
        id
      }
      files {
        id
        url
      }
      user {
        id
        username
      }
    }
  }
`;

const Wrapper = styled.div``;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin: 5px;
  }
`;

const InputDeposit = styled(Input)`
  width: 20%;
`;
const InputMoney = styled(Input)`
  width: 20%;
`;
const InputMLSnumber = styled(Input)`
  width: 20%;
`;
const InputFloor = styled(Input)`
  width: 20%;
`;

const InputContent = styled(TextareaAutosize)`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 15px;
  height: 200px;
  margin: 5px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const SelectInput = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const SelectBox = styled.select`
  height: 35px;
  width: 80px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const OptionCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  label {
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default ({ props, data }) => {
  ///////////////////////////////////////////////////////////////////////////////////////

  const preData = data && data.detailPost;
  const [select, setSelect] = useState("월세");
  const [imageUploadMulter, setImageUploadMulter] = useState(
    preData && preData.files
  );
  useEffect(
    () => console.log(imageUploadMulter, "imageUpLoad multer에 변화가 일어남"),
    [imageUploadMulter]
  );
  console.log(imageUploadMulter, "여길 체크해서 고쳐야한다");

  const [files, setFiles] = useState([]);
  console.log(files, "files");
  const [testt, setOnsubmit] = useState(false);
  useEffect(() => {
    if (testt) {
      if (testt === true) {
        return lastCall();
      }
    }
  }, [testt]);
  const [fuckAround, setFuckAround] = useState(true);
  useEffect(() => {
    setOnsubmit(false);
  }, [fuckAround]);
  const [action, setAction] = useState("EDIT");
  const [airConditioner, setAirConditioner] = useState(false);
  const [washer, setWasher] = useState(false);
  const [refrigerator, setRefrigerator] = useState(false);
  const [internet, setInternet] = useState(false);
  const [microwave, setMicrowave] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [bed, setBed] = useState(false);
  const [desk, setDesk] = useState(false);
  const [induction, setInduction] = useState(false);
  const [gasRange, setGasRange] = useState(false);
  const [doorLock, setDoorLock] = useState(false);
  const [CCTV, setCCTV] = useState(false);
  const [pets, setPets] = useState(false);
  const [elevator, setElevator] = useState(false);
  const [parking, setParking] = useState(false);
  const [electricHeating, setElectricHeating] = useState(false);
  const [cityGasHeating, setCityGasHeating] = useState(false);
  const [nightElectric, setNightElectric] = useState(false);
  const [wateTax, setWateTax] = useState(false);
  const [includingElectricity, setIncludingElectricity] = useState(false);
  const [cityGasIncluded, setCityGasIncluded] = useState(false);

  const caption = useInput(preData && preData.caption);
  const deposit = useInput(preData && preData.deposit);
  const money = useInput(preData && preData.deposit);
  const content = useInput(preData && preData.content);
  const numberOfFoors = useInput(preData && preData.numberOfFoors);
  const MLSnumber = useInput(preData && preData.MLSnumber);
  const [form, setFormData] = useState("");

  let fileData = [];
  let arrayOfPath = [];
  const id = preData && preData.id;
  const editPosts = useMutation(EDITPOST, {
    variables: {
      id,
      action,
      selectType: select,
      airConditioner,
      washer,
      refrigerator,
      files,
      internet,
      microwave,
      wifi,
      bed,
      desk,
      induction,
      gasRange,
      doorLock,
      CCTV,
      pets,
      elevator,
      parking,
      electricHeating,
      cityGasHeating,
      nightElectric,
      wateTax,
      includingElectricity,
      cityGasIncluded,
      caption: caption.value,
      deposit: deposit.value,
      money: money.value,
      content: content.value,
      numberOfFoors: numberOfFoors.value,
      MLSnumber: MLSnumber.value
    }
  });

  const noClick = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setSelect(e.target.value);
  };

  const airConditionerS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setAirConditioner(true);
    } else if (target === false) {
      setAirConditioner(false);
    }
    return false;
  };

  const washerS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setWasher(true);
    } else if (target === false) {
      setWasher(false);
    }
    return false;
  };

  const refrigeratorS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setRefrigerator(true);
    } else if (target === false) {
      setRefrigerator(false);
    }
    return false;
  };

  const internetS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setInternet(true);
    } else if (target === false) {
      setInternet(false);
    }
    return false;
  };

  const microwaveS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setMicrowave(true);
    } else if (target === false) {
      setMicrowave(false);
    }
    return false;
  };
  const wifiS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setWifi(true);
    } else if (target === false) {
      setWifi(false);
    }
    return false;
  };
  const bedS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setBed(true);
    } else if (target === false) {
      setBed(false);
    }
    return false;
  };
  const deskS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setDesk(true);
    } else if (target === false) {
      setDesk(false);
    }
    return false;
  };
  const inductionS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setInduction(true);
    } else if (target === false) {
      setInduction(false);
    }
    return false;
  };
  const gasRangeS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setGasRange(true);
    } else if (target === false) {
      setGasRange(false);
    }
    return false;
  };
  const doorLockS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setDoorLock(true);
    } else if (target === false) {
      setDoorLock(false);
    }
    return false;
  };
  const CCTVS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setCCTV(true);
    } else if (target === false) {
      setCCTV(false);
    }
    return false;
  };
  const petsS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setPets(true);
    } else if (target === false) {
      setPets(false);
    }
    return false;
  };
  const elevatorS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setElevator(true);
    } else if (target === false) {
      setElevator(false);
    }
    return false;
  };
  const parkingS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setParking(true);
    } else if (target === false) {
      setParking(false);
    }
    return false;
  };
  const electricHeatingS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setElectricHeating(true);
    } else if (target === false) {
      setElectricHeating(false);
    }
    return false;
  };
  const cityGasHeatingS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setCityGasHeating(true);
    } else if (target === false) {
      setCityGasHeating(false);
    }
    return false;
  };
  const nightElectricS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setNightElectric(true);
    } else if (target === false) {
      setNightElectric(false);
    }
    return false;
  };

  const wateTaxS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setWateTax(true);
    } else if (target === false) {
      setWateTax(false);
    }
    return false;
  };
  const includingElectricityS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setIncludingElectricity(true);
    } else if (target === false) {
      setIncludingElectricity(false);
    }
    return false;
  };
  const cityGasIncludedS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setCityGasIncluded(true);
    } else if (target === false) {
      setCityGasIncluded(false);
    }
    return false;
  };

  const uploadFileHandle = async e => {
    let filess = e.target.files;
  };

  const setter = async () => {
    const {
      data: {
        editPost: { id }
      }
    } = await editPosts();
    if (id && onSubmit) {
      setFuckAround(false);
      //props.history.push(`/roomsdetail/${id}/new/1`);
      //window.location.reload();
      return false;
    }
  };

  const lastCall = axiosData => {
    if (fileData) {
      setFiles(fileData);
    } else {
      setFiles(fileData);
    }
    setFuckAround(false);
    if (testt) {
      setter();
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const data = new FormData();

    for (var x = 0; x < imageUploadMulter.length; x++) {
      data.append("file", imageUploadMulter[x]);
    }
    console.log(data.get("file"), "폼데이터");
    const axiosData = await axios
      .post("http://localhost:4000/upload", data)
      .then(res => {
        console.log(res, "axios res");
        return res.data;
      });
    console.log(axiosData, "axios data");
    axiosData.forEach(element => {
      fileData.push(element.path);
    });

    setFiles(fileData);
    setOnsubmit(true);
    //props.history.push({ pathname: "/uploading", state: { id: 123 } });
    return lastCall(fileData);

    //props.history.push(`/roomsdetail/${id}`);

    // props.history.push(`/roomsdetail/${id}`);
  };

  const presetFileImages =
    preData && preData.files.map(item => `http://localhost:4000/${item.url}`);

  //파일 업로드 하는 부분
  console.log(preData, "다시확인");
  useEffect(() => {
    const upload = new FileUploadWithPreview("myUniqueUploadId", {
      showDeleteButtonOnImages: true,
      text: {
        chooseFile: "파일을 선택하세요!",
        browse: "찾기",
        selectedCount: "개의 파일이 선택되었습니다!"
      },
      presetFiles: presetFileImages
    });

    console.log(upload, "1번 실행되었다");
  }, []);

  //딱 한번 실행 되도록....

  window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
    let convertFiles = e.detail.cachedFileArray.map(
      item =>
        new File([item], item.name, {
          type: "File",
          lastModified: Date.now()
        })
    );

    console.log(convertFiles, "file add ? ");
    if (e && e.detail) {
      console.log("1");
      setImageUploadMulter(convertFiles);
    }

    if (e.detail.uploadId === "mySecondImage") {
      console.log(e.detail.cachedFileArray);
      console.log(e.detail.addedFilesCount);
    }
  });

  window.addEventListener("fileUploadWithPreview:imageDeleted", function(e) {
    const convertFilesDelete = e.detail.cachedFileArray.map(
      item =>
        new File([item], item.name, {
          type: "File",
          lastModified: Date.now()
        })
    );
    console.log(convertFilesDelete, "delteed");

    setImageUploadMulter(convertFilesDelete);
    // e.detail.uploadId
    // e.detail.cachedFileArray
    // e.detail.addedFilesCount
    // Use e.detail.uploadId to match up to your specific input
    if (e.detail.uploadId === "mySecondImage") {
      console.log(e.detail.cachedFileArray);
      console.log(e.detail.addedFilesCount);
    }
  });
  return (
    <Wrapper>
      <form
        id="test"
        onSubmit={onSubmit}
        name="files"
        method="post"
        encType="multipart/form-data"
      >
        <Inputs>
          <Input onSubmit={noClick} placeholder={" 제목"} {...caption} />
          <SelectInput>
            <InputDeposit
              type={"number"}
              onSubmit={noClick}
              placeholder={"보증금 ex)200만원"}
              {...deposit}
            />
            <SelectBox namevalue={select} onChange={handleChange}>
              <option value="">유형선택</option>
              <option value="월세" required>
                월세
              </option>
              <option value="전세" required>
                전세
              </option>
            </SelectBox>
            <InputMoney
              type={"number"}
              onSubmit={noClick}
              placeholder={"월세 ex)30만원"}
              {...money}
            />
            <InputFloor
              type={"number"}
              onSubmit={noClick}
              placeholder={"층수 : 숫자만 기입해주세요"}
              {...numberOfFoors}
            />
            <InputMLSnumber
              onSubmit={noClick}
              placeholder={"매물번호"}
              {...MLSnumber}
            />
          </SelectInput>
          <OptionCheckBox>
            <label>
              에어컨
              <input
                type="checkbox"
                name="airConditioner"
                checked={airConditioner}
                onChange={airConditionerS}
              />
            </label>
            <label>
              세탁기
              <input
                type="checkbox"
                name="washer"
                checked={washer}
                onChange={washerS}
              />
            </label>
            <label>
              냉장고
              <input
                type="checkbox"
                name="refrigerator"
                checked={refrigerator}
                onChange={refrigeratorS}
              />
            </label>
            <label>
              인터넷
              <input
                type="checkbox"
                name="internet"
                checked={internet}
                onChange={internetS}
              />
            </label>
            <label>
              전자레인지
              <input
                type="checkbox"
                name="microwave"
                checked={microwave}
                onChange={microwaveS}
              />
            </label>

            <label>
              wifi
              <input
                type="checkbox"
                name="wifi"
                checked={wifi}
                onChange={wifiS}
              />
            </label>
            <label>
              침대
              <input type="checkbox" name="bed" checked={bed} onChange={bedS} />
            </label>
            <label>
              책상
              <input
                type="checkbox"
                name="desk"
                checked={desk}
                onChange={deskS}
              />
            </label>
            <label>
              인덕션
              <input
                type="checkbox"
                name="induction"
                checked={induction}
                onChange={inductionS}
              />
            </label>
            <label>
              가스레인지
              <input
                type="checkbox"
                name="gasRange"
                checked={gasRange}
                onChange={gasRangeS}
              />
            </label>
            <label>
              도어락
              <input
                type="checkbox"
                name="doorLock"
                checked={doorLock}
                onChange={doorLockS}
              />
            </label>
            <label>
              CCTV
              <input
                type="checkbox"
                name="CCTV"
                checked={CCTV}
                onChange={CCTVS}
              />
            </label>
            <label>
              애완동물
              <input
                type="checkbox"
                name="pets"
                checked={pets}
                onChange={petsS}
              />
            </label>
            <label>
              엘리베이터
              <input
                type="checkbox"
                name="elevator"
                checked={elevator}
                onChange={elevatorS}
              />
            </label>
            <label>
              주차
              <input
                type="checkbox"
                name="parking"
                checked={parking}
                onChange={parkingS}
              />
            </label>
            <label>
              전기난방
              <input
                type="checkbox"
                name="electricHeating"
                checked={electricHeating}
                onChange={electricHeatingS}
              />
            </label>
            <label>
              도시가스
              <input
                type="checkbox"
                name="cityGasHeating"
                checked={cityGasHeating}
                onChange={cityGasHeatingS}
              />
            </label>
            <label>
              심야전기
              <input
                type="checkbox"
                name="nightElectric"
                checked={nightElectric}
                onChange={nightElectricS}
              />
            </label>
            <label>
              수도세
              <input
                type="checkbox"
                name="wateTax"
                checked={wateTax}
                onChange={wateTaxS}
              />
            </label>
            <label>
              전기세포함
              <input
                type="checkbox"
                name="includingElectricity"
                checked={includingElectricity}
                onChange={includingElectricityS}
              />
            </label>
            <label>
              도시가스포함
              <input
                type="checkbox"
                name="cityGasIncluded"
                checked={cityGasIncluded}
                onChange={cityGasIncludedS}
              />
            </label>
          </OptionCheckBox>

          <InputContent onSubmit={noClick} placeholder={"내용"} {...content} />

          <div class="custom-file-container" data-upload-id="myUniqueUploadId">
            <label>
              모든 파일 지우기
              <a
                href="javascript:void(0)"
                class="custom-file-container__image-clear"
                title="Clear Image"
              >
                &times;
              </a>
            </label>
            <label class="custom-file-container__custom-file">
              <input
                type="file"
                class="custom-file-container__custom-file__custom-file-input"
                accept="*"
                multiple
                aria-label="Choose File"
                onChange={uploadFileHandle}
              />
              <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
              <span class="custom-file-container__custom-file__custom-file-control" />
            </label>
            <div class="custom-file-container__image-preview" />
          </div>

          <Button text={"수정하기 !!!"} name="myButton" />
        </Inputs>
      </form>
    </Wrapper>
  );
};

//<InputFilesContainer>
//            <label>
//              <InputFiles
//                type="file"
//                name="file"
//                multiple
//                onChange={uploadFileHandle}
//              />
//            </label>
//          </InputFilesConta
