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
  margin: 3px;
`;

export const SwipeItem = styled.View`
  background-color: #63c2d1;
  flex: 1;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View`
  background-color: #63c2d1;
  height: 140px;
`;

export const PageBody = styled.View`
  background-color: #ffffff;
  min-height: 400px;
  margin-top: -50px;
  border-top-left-radius: 50px;
`;

export const UserInfoArea = styled.View`
  margin-top: -30px;
  flex-direction: row;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  margin-left: 30px;
  margin-right: 20px;
  border-radius: 20px;
  border-width: 4px;
  border-color: #ffffff;
`;

export const UserInfo = styled.View`
  justify-content: flex-end;
  flex: 1;
`;

export const UserInfoName = styled.Text`
  color: #000000;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const UserFavButton = styled.TouchableOpacity`
  background-color: #ffffff;
  width: 40px;
  height: 40px;
  margin-top: 20px;
  border: 2px solid #999999;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
