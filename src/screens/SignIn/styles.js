import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #63c2d1;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  background-color: #268596;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

export const SignMessageButton = styled.TouchableOpacity`
  margin-top: 50px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
`;

export
