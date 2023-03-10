import styled from "styled-components/native";

// My

const Area = styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 20px;
  flex-direction: row;
`;

const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
