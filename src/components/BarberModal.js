import styled from "styled-components/native";

const modal = styled.Modal``;

const ModalArea = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: flex-end;
`;

const Modalbody = styled.View`
  background-color: #83d6e3;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

const ModalItem = styled.View`
  background-color: #ffffff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
`;

const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  margin-right: 15px;
  border-radius: 20px;
`;

const UserName = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;
