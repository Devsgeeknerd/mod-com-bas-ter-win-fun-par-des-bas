import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

import UserContext, { userContext } from "../../contexts/UserContext";
import Api from "../../Api";

import BarberLogo from "../../assets/barber.svg";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        let res=await;
      }
    };
  });
};
