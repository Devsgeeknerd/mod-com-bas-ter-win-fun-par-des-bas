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
