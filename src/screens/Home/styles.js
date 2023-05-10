import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #63c2d1;
  flex: 1;
`;

export const Scroller = styled.ScrollView`
  padding: 20px;
  flex: 1;
`;

export const HeaderArea = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const HeaderTitle = styled.Text`
  color: #ffffff;
  width: 250px;
  font-size: 24px;
  font-weight: bold;
`;

export const SearchButton
