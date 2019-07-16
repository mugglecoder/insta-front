import React, { useQuery } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";

//그라프큐엘

const SEARCH = gql`
  query searchRoom(
    $deposit: Int
    $deposit2: Int
    $money: Int
    $money2: Int
    $caption: String
    $content: String
    $files: [String]
    $selectType: String
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
    $electricHeating: Boolean
    $cityGasHeating: Boolean
    $nightElectric: Boolean
    $wateTax: Boolean
    $includingElectricity: Boolean
    $cityGasIncluded: Boolean
    $numberOfFoors: String
    $MLSnumber: String
  ) {
    searchRoom(
      deposit: $deposit
      deposit2: $deposit2
      money: $money
      money2: $money2
      caption: $caption
      content: $content
      files: $files
      selectType: $selectType
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
      electricHeating: $electricHeating
      cityGasHeating: $cityGasHeating
      nightElectric: $nightElectric
      wateTax: $wateTax
      includingElectricity: $includingElectricity
      cityGasIncluded: $cityGasIncluded
      numberOfFoors: $numberOfFoors
      MLSnumber: $MLSnumber
    ) {
      id
      caption
      places {
        id
        lat
        lng
      }
      count
      content
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
      deposit
      money
      selectType
      createdAt
      user {
        id
        username
      }
      files {
        id
        url
      }
    }
  }
`;

export default withRouter(props => {
  const {
    location: {
      state: {
        depositSS,
        deposit2SS,
        moneySS,
        money2SS,
        selectTypeSS,
        airConditionerSS,
        washerSS,
        refrigeratorSS,
        internetSS,
        microwaveSS,
        wifiSS,
        bedSS,
        deskSS,
        inductionSS,
        gasRangeSS,
        doorLockSS,
        CCTVSS,
        petsSS,
        elevatorSS,
        parkingSS,
        electricHeatingSS,
        cityGasHeatingSS,
        nightElectricSS,
        wateTaxSS,
        includingElectricitySS,
        cityGasIncludedSS
      }
    }
  } = props;
  console.log(props, "re match");

  return <p>ddd</p>;
});
