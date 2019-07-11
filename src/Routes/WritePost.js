import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useInput from "../Hooks/useInput";
import TextareaAutosize from "react-autosize-textarea";
import axios from "axios";
import FileUploadWithPreview from "file-upload-with-preview";

//주소 저장하는 gql
const SAVEADDRESS = gql`
  mutation place($id: String, $lat: String, $lng: String) {
    place(id: $id, lat: $lat, lng: $lng) {
      id
      lng
      lat
    }
  }
`;

const UPLOAD = gql`
  mutation upload(
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
    upload(
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

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddressGot = styled(Input)`
  width: 23%;
`;

const AddressButton = styled.button`
  width: 75%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.blueColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
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

const InputFilesContainer = styled.div`
  position: relative;
  &:after {
    pointer-events: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 50px;
    right: 0;
    height: 56px;
    content: "";
    background-image: url(https://image.flaticon.com/icons/png/128/109/109612.png);
    display: block;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;
const InputFiles = styled.input`
  outline: 2px dashed #92b0b3;
  outline-offset: -10px;
  -webkit-transition: outline-offset 0.15s ease-in-out,
    background-color 0.15s linear;
  transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;
  padding: 120px 0px 85px 35%;
  text-align: center !important;
  margin: 0;
  width: 100% !important;
  &:focus {
    outline: 2px dashed #92b0b3;
    outline-offset: -10px;
    -webkit-transition: outline-offset 0.15s ease-in-out,
      background-color 0.15s linear;
    transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;
    border: 1px solid #92b0b3;
  }
  &::before {
    position: absolute;
    bottom: 10px;
    left: 0;
    pointer-events: none;
    width: 100%;
    right: 0;
    height: 57px;
    content: " 파일을 선택하거나 드랍 하세요 :) ";
    display: block;
    margin: 0 auto;
    color: #2ea591;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
  }
`;

const ImgPreView = styled.img`
  border-radius: 5px;
  height: 150px;
  width: 150px;
  position: relative;
  top: 0;
  background-image: url(${props => props.src}});
  background-position: center;
  background-size: cover;
`;

const Div = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Divs = styled.div`
  width: 100%;
`;

export default props => {
  ///////////////////////////////////////////////////////////////////////
  const [select, setSelect] = useState("");

  const [imageUploadMulter, setImageUploadMulter] = useState(null);
  useEffect(
    () =>
      console.log("The value after update 이미지가 들어감", imageUploadMulter),
    [imageUploadMulter]
  );

  const [files, setFiles] = useState([]);
  console.log(files, "files");
  const [testt, setOnsubmit] = useState(false);

  useEffect(() => {
    console.log("이거 실행되어야함");
    if (testt) {
      if (testt === true) {
        return lastCall();
      }
      console.log("잘되나봐");
    }
  }, [testt]);

  const [fuckAround, setFuckAround] = useState(true);
  useEffect(() => {
    setOnsubmit(false);
  }, [fuckAround]);
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
  const [filesss, setFilesss] = useState("");
  const [pathArray, setPathArray] = useState([]);
  //주소 찾는 훅
  const [addressValue, setAddressValue] = useState("");

  //주소 저장 훅
  const [lat, setLatS] = useState("");
  const [lng, setLngS] = useState("");
  const [place, setPlace] = useState({});
  console.log(place, "plcae,", lat, "lat", lng, "lng");
  //버튼 벨유
  const [buttonValue, setButtonValue] = useState("");

  //console.log(pond, "pond");

  const caption = useInput("");
  const deposit = useInput("");
  const money = useInput("");
  const content = useInput("");
  const numberOfFoors = useInput("");
  const MLSnumber = useInput("");
  const Address = useInput("");

  const [form, setFormData] = useState("");

  let fileData = [];
  console.log(fileData, "fileData?");
  let arrayOfPath = [];
  //  const getName = () => {
  //    if (imageUploadMulter) {
  //      return imageUploadMulter.name;
  //    } else {
  //      return false;
  //    }
  //  };

  // 업로드 뮤테이션
  const test = useMutation(UPLOAD, {
    variables: {
      place,
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

  /// 주소 찾는 로직 //////////////////////////////////////////////////////

  const saveAddressS = useMutation(SAVEADDRESS);
  const findAddress = e => {
    console.log(e.target, "target");
  };
  const getAddress = async e => {
    e.preventDefault();
    const addressData = await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          Address.value
        }&key=AIzaSyDQc0xMBQnrOOoj8UkPkN6yeGqkAo_l2hM`
      )
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));

    const formattedAddress =
      addressData &&
      addressData.data &&
      addressData.data.results[0].formatted_address;
    setButtonValue(formattedAddress);

    //lat 값
    const latS =
      addressData &&
      addressData.data &&
      addressData.data.results[0].formatted_address &&
      addressData.data.results[0].geometry.location.lat;
    setLatS(String(latS));

    //lng 값
    const lngS =
      addressData &&
      addressData.data &&
      addressData.data.results[0].formatted_address &&
      addressData.data.results[0].geometry.location.lng;
    setLngS(String(lngS));

    setPlace({ lat: String(latS), lng: String(lngS) });
  };

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
    await saveAddressS({ variables: { id, lat, lng } });
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
  ////////////////////////////////////////////////////////////////////////////////////
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
          <AddressContainer>
            <AddressGot
              onChange={findAddress}
              placeholder={"주소를 적어주세요 ex)복현동 407-1 or 경진로 22길"}
              {...Address}
            />

            <AddressButton onClick={getAddress}>
              {buttonValue
                ? `${buttonValue}   /    주소가 틀리다면 재검색!`
                : "주소찾기"}
            </AddressButton>
          </AddressContainer>
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
//          </InputFilesContainer>
