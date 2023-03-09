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
  background-color: ${props => props.color === 'green'
          ? 'darkseagreen'
          : 'cornflowerblue'};
  width: 400px;
  height: 200px;
  margin: 5px;
  text-align: center;
`
