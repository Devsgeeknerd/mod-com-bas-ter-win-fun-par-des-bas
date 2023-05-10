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

export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const LocationArea = styled.View`
  background-color: #4eadbe;
  height: 60px;
  margin-top: 30px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 30px;
  align-items: center;
  flex-direction: row;
`;

export const LocationInput = styled.TextInput`
  color: #ffffff;
  font-size: 16px;
  flex: 1;
`;

export
