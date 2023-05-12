import React from "react";
import {} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";

import Api from "../../Api";

export default () => {
  const navigation = useNavigation();
  const handleLogouClick = async () => {
    await Api.logout();
    navigation.reset({ routes: [{ name: "SignIn" }] });
  };

  return <Container></Container>;
};
