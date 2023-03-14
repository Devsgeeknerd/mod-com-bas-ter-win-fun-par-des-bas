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
