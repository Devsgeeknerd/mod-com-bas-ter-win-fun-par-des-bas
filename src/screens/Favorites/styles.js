import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #63c2d1;
  flex: 1;
`;

export const HeaderArea = styled.View`
  height: 50px;
  padding: 0px 20px;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
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
  color: #ffffff;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
`;
