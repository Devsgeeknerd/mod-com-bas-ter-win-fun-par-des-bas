import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const SwipeDot = styled.View`
  background-color: #ffffff;
  width: 10px;
  height: 10px;
  margin: 3px;
  border-radius: 5px;
`;

export const SwipeDotActive = styled.View`
  background-color: #000000;
  width: 10px;
  height: 10px;
  border-radius: 5px;
`;
