import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <ColorMoney color={props.money.banknotes === "Dollars" ? 'green' : ''}>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </ColorMoney>
        </>
    );
};

const ColorMoney = styled.div`
  background-color: ${props => {
    if (props.color === 'green') {
      return 'darkseagreen'
    }else {
        return 'cornflowerblue'
    }}
  };
  width: 400px;
  height: 200px;
  margin: 5px;
  text-align: center;
`

/*
const GreenMoney = styled.div`
  background-color: darkseagreen;
  width: 400px;
  height: 200px;
`

const BlueMoney = styled.div`
  background-color: cornflowerblue;
  width: 400px;
  height: 200px;
`*/
