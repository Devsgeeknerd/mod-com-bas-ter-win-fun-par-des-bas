import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #63c2d1;
  flex: 1;
`;

export const SearchArea = styled.View`
  background-color: #4eadbe;
  height: 40px;
  margin: 20px;
  margin-bottom: 0px;
  padding: 0px 20px;
  border-radius: 20px;
`;

export const SearchInput = styled.TextInput`
  color: #ffffff;
  font-size: 16px;
  flex: 1;
`;

export const Scroller = styled.ScrollView`
  padding: 0px 20px;
  flex: 1;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 30px;
`;

export const ListArea = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const EmptyWarning = styled.Text`
  text-align: center;
`;
