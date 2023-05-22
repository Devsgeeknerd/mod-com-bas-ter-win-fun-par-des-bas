import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import { UserContext } from "../../contexts/UserContext";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";

import SignInput from "../../components/SignInput";

import Api from "../../Api";

import BarberLogo from "../../assets/barber.svg";
import PersonIcon from "../../assets/person.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignClick = async () => {
    if (nameField != "" && emailField != "" && passwordField != "") {
      let res = await Api.signUp(nameField, emailField, passwordField);
      if (res.token) {
        await AsyncStorage.setItem("token", res.token);
        userDispatch({
          type: "setAvatar",
          payload: { avatar: res.data.avatar },
        });
        navigation.reset({ routes: [{ name: "MainTab" }] });
      } else {
        alert("Erro: " + res.error);
      }
    } else {
      alert("Preencha os campos");
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({ routes: [{ name: "SignIn" }] });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t}
        />
      </InputArea>
    </Container>
  );
};
