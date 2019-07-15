import React from "react";
import SearchPresenter from "./SearchPresenter";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

export default withRouter(props => {
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
      }
    }
  `;

  const {
    location: {
      state: {
        depositS,
        deposit2S,
        moneyS,
        money2S,
        selectTypeS,
        airConditionerS,
        washerS,
        refrigeratorS,
        internetS,
        microwaveS,
        wifiS,
        bedS,
        deskS,
        inductionS,
        gasRangeS,
        doorLockS,
        CCTVS,
        petsS,
        elevatorS,
        parkingS,
        electricHeatingS,
        cityGasHeatingS,
        nightElectricS,
        wateTaxS,
        includingElectricityS,
        cityGasIncludedS
      }
    }
  } = props;
  console.log(props, "re match");

  const { data, loading } = useQuery(SEARCH, {
    variables: {
      deposit: depositS,
      deposit2: deposit2S,
      money: moneyS,
      money2: money2S,
      selectType: selectTypeS,
      airConditioner: airConditionerS,
      washer: washerS,
      refrigerator: refrigeratorS,
      internet: internetS,
      microwave: microwaveS,
      wifi: wifiS,
      bed: bedS,
      desk: deskS,
      induction: inductionS,
      gasRange: gasRangeS,
      doorLock: doorLockS,
      CCTV: CCTVS,
      pets: petsS,
      elevator: elevatorS,
      parking: parkingS,
      electricHeating: electricHeatingS,
      cityGasHeating: cityGasHeatingS,
      nightElectric: nightElectricS,
      wateTax: wateTaxS,
      includingElectricity: includingElectricityS,
      cityGasIncluded: cityGasIncludedS
      // numberOfFoors,
      //  MLSnumber
    }
  });
  console.log(data, "data");

  return <SearchPresenter loading={loading} data={data} />;
});
