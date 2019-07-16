import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMutation, useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useInput from "../Hooks/useInput";
import TextareaAutosize from "react-autosize-textarea";
import axios from "axios";
import FileUploadWithPreview from "file-upload-with-preview";
import "../../src/css/preview.css";
import { string } from "postcss-selector-parser";

const GETPOST = gql`
  query detailPost($id: String) {
    detailPost(id: $id) {
      id
      location
      caption
      content
      selectType
      deposit
      money
      user {
        id
      }
      files {
        id
      }
      likes {
        id
      }
      comments {
        id
      }
      isLiked
      likeCount
      count
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
      numberOfFoors
      MLSnumber
      createdAt
      updatedAt
    }
  }
`;

const EDITPOST = gql`
  mutation editPost(
    $selectType: String
    $deposit: String
    $money: String
    $caption: String
    $files: [String]
    $content: String
    $washer: Boolean
    $airConditioner: String
    $refrigerator: String
    $internet: String
    $microwave: String
    $wifi: String
    $bed: String
    $desk: String
    $induction: String
    $gasRange: String
    $doorLock: String
    $CCTV: String
    $pets: String
    $elevator: String
    $parking: String
    $numberOfFoors: String
    $electricHeating: String
    $cityGasHeating: String
    $nightElectric: String
    $wateTax: String
    $includingElectricity: String
    $cityGasIncluded: String
    $MLSnumber: String
  ) {
    editPost(
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
      files {
        id
        url
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

export default (props, { data }) => {
  console.log(data, "data");
  const [select, setSelect] = useState("");
  const [imageUploadMulter, setImageUploadMulter] = useState(null);
  useEffect(
    () =>
      console.log("The value after update 이미지가 들어감", imageUploadMulter),
    [imageUploadMulter]
  );
  const [files, setFiles] = useState([]);
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

  const postId = props && props.match.params && props.match.params.id;
  console.log(postId, "!!");
  const getData = useQuery(GETPOST, {
    variables: { id: postId }
  });

  const postData = getData && getData.data && getData.data.detailPost;
  const preCaption = postData && postData.caption;
  console.log(getData, "getdata");

  const [airConditioner, setAirConditioner] = useState("");
  const [washer, setWasher] = useState("");
  const [refrigerator, setRefrigerator] = useState("");
  const [internet, setInternet] = useState("");
  const [microwave, setMicrowave] = useState("");
  const [wifi, setWifi] = useState("");
  const [bed, setBed] = useState("");
  const [desk, setDesk] = useState("");
  const [induction, setInduction] = useState("");
  const [gasRange, setGasRange] = useState("");
  const [doorLock, setDoorLock] = useState("");
  const [CCTV, setCCTV] = useState("");
  const [pets, setPets] = useState("");
  const [elevator, setElevator] = useState("");
  const [parking, setParking] = useState("");
  const [electricHeating, setElectricHeating] = useState("");
  const [cityGasHeating, setCityGasHeating] = useState("");
  const [nightElectric, setNightElectric] = useState("");
  const [wateTax, setWateTax] = useState("");
  const [includingElectricity, setIncludingElectricity] = useState("");
  const [cityGasIncluded, setCityGasIncluded] = useState("");
  const [filesss, setFilesss] = useState("");
  const [pathArray, setPathArray] = useState([]);
  const caption = useInput(preCaption);
  console.log(caption.value);
  const deposit = useInput("");
  const money = useInput("");
  const content = useInput("");
  const numberOfFoors = useInput("");
  const MLSnumber = useInput("");
  const [form, setFormData] = useState("");

  let fileData = [];
  let arrayOfPath = [];

  const test = useMutation(EDITPOST, {
    variables: {
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
      setAirConditioner("에어컨");
    } else if (target === false) {
      setAirConditioner("");
    }
    return false;
  };

  const washerS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setWasher("세탁기");
    } else if (target === false) {
      setWasher("");
    }
    return false;
  };

  const refrigeratorS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setRefrigerator("냉장고");
    } else if (target === false) {
      setRefrigerator("");
    }
    return false;
  };

  const internetS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setInternet("인터넷");
    } else if (target === false) {
      setInternet("");
    }
    return false;
  };

  const microwaveS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setMicrowave("전자렌지");
    } else if (target === false) {
      setMicrowave("");
    }
    return false;
  };
  const wifiS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setWifi("wifi");
    } else if (target === false) {
      setWifi("");
    }
    return false;
  };
  const bedS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setBed("침대");
    } else if (target === false) {
      setBed("");
    }
    return false;
  };
  const deskS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setDesk("책상");
    } else if (target === false) {
      setDesk("");
    }
    return false;
  };
  const inductionS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setInduction("인덕션");
    } else if (target === false) {
      setInduction("");
    }
    return false;
  };
  const gasRangeS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setGasRange("가스레인지");
    } else if (target === false) {
      setGasRange("");
    }
    return false;
  };
  const doorLockS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setDoorLock("도어락");
    } else if (target === false) {
      setDoorLock("");
    }
    return false;
  };
  const CCTVS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setCCTV("CCTV");
    } else if (target === false) {
      setCCTV("");
    }
    return false;
  };
  const petsS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setPets("애완동물");
    } else if (target === false) {
      setPets("");
    }
    return false;
  };
  const elevatorS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setElevator("엘리베이터");
    } else if (target === false) {
      setElevator("");
    }
    return false;
  };
  const parkingS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setParking("주차");
    } else if (target === false) {
      setParking("");
    }
    return false;
  };
  const electricHeatingS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setElectricHeating("전기난방");
    } else if (target === false) {
      setElectricHeating("");
    }
    return false;
  };
  const cityGasHeatingS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setCityGasHeating("도시가스난방");
    } else if (target === false) {
      setCityGasHeating("");
    }
    return false;
  };
  const nightElectricS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setNightElectric("심야전기");
    } else if (target === false) {
      setNightElectric("");
    }
    return false;
  };

  const wateTaxS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setWateTax("수도세");
    } else if (target === false) {
      setWateTax("");
    }
    return false;
  };
  const includingElectricityS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setIncludingElectricity("전기세포함");
    } else if (target === false) {
      setIncludingElectricity("");
    }
    return false;
  };
  const cityGasIncludedS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setCityGasIncluded("도시가스포함");
    } else if (target === false) {
      setCityGasIncluded("");
    }
    return false;
  };

  console.log(imageUploadMulter, "이미지물터");

  const uploadFileHandle = async e => {
    let filess = e.target.files;

    return true;
  };

  const setter = async () => {
    const {
      data: {
        upload: { id }
      }
    } = await test();
    if (id && onSubmit) {
      setFuckAround(false);
      props.history.push(`/roomsdetail/${id}/new/1`);
      window.location.reload();
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

    const axiosData = await axios
      .post("http://localhost:4000/upload", data)
      .then(res => {
        return res.data;
      });
    console.log(axiosData, "axios data");
    axiosData.forEach(element => {
      fileData.push(element.path);
    });

    setFiles(fileData);
    setOnsubmit(true);
    props.history.push({ pathname: "/uploading", state: { id: 123 } });
    return lastCall(fileData);

    //props.history.push(`/roomsdetail/${id}`);

    // props.history.push(`/roomsdetail/${id}`);
  };

  //파일 업로드 하는 부분
  useEffect(() => {
    new FileUploadWithPreview("myUniqueUploadId", {
      showDeleteButtonOnImages: true,
      text: {
        chooseFile: "파일을 선택하세요!",
        browse: "찾기",
        selectedCount: "개의 파일이 선택되었습니다!"
      },

      presetFiles: []
    });
  }, []);

  window.addEventListener("fileUploadWithPreview:imagesAdded", function(e) {
    setImageUploadMulter(e.detail && e.detail.cachedFileArray);
    // e.detail.uploadId
    // e.detail.cachedFileArray
    // e.detail.addedFilesCount
    // Use e.detail.uploadId to match up to your specific input
    if (e.detail.uploadId === "mySecondImage") {
      console.log(e.detail.cachedFileArray);
      console.log(e.detail.addedFilesCount);
    }
  });

  window.addEventListener("fileUploadWithPreview:imageDeleted", function(e) {
    setImageUploadMulter(e.detail && e.detail.cachedFileArray);
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

          <Button text={"Sign up"} name="myButton" />
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
