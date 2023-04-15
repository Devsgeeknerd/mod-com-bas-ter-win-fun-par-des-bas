import styled from "styled-components";

const InputArea = styled.View`
  background-color: #83d6e3;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  padding-left: 15px;
  border-radius: 30px;
  align-items: center;
  flex-direction: row;
`;

const Input = styled.TextInput`
  color: #268596;
  margin-left: 10px;
  font-size: 16px;
  flex: 1;
`;

export default ({ IconSvg, placeholder, value, onChangeText, password }) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#268596" />
      <Input />
    </InputArea>
  );
};
