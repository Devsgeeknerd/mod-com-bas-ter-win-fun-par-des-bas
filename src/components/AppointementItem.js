import React from "react";
import styled from "styled-components/native";

const Area = styled.View`
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 20px;
`;

const UserArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 56px;
  height: 56px;
  margin-right: 20px;
  border-radius: 20px;
`;

const UserName = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;

const SplitArea = styled.View`
  margin-top: 10px;
  justify-content: space-between;
  flex-direction: row;
`;

const ServiceText = styled.Text`
  color: #000000;
  font-size: 16px;
  font-weight: bold;
`;

const DateText = styled.Text`
  background-color: #4eadbe;
  color: #000000;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export default ({ data }) => {
  let d = data.datetime.split(" ");
  let time = d[1].substring(0.5);
  let date = new Date(d[0]);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  let dateString = `${day}/${month}/${year}`;

  return (
    <Area>
      <UserArea>
        <Avatar source={{ uri: data.barber.avatar }} />
        <UserName>{data.barber.name}</UserName>
      </UserArea>

      <SplitArea>
        <ServiceText>{data.barber.name}</ServiceText>
        <ServiceText>R$ {data.service.price.toFixed(2)}</ServiceText>
      </SplitArea>

      <SplitArea>
        <DateText>{dateString}</DateText>
        <DateText>{time}</DateText>
      </SplitArea>
    </Area>
  );
};
