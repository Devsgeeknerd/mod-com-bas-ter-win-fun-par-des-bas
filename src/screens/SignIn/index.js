import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import { UserContext } from "../../contexts/UserContext";

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SingMessageButton,
  SingMessageButtonText,
  SingMessageButtonTextBold,
} from "./styles";

import Api from "../../Api";

import SingInput from "../../components/SignInput";

import BarberLogo from "../../assets/barber.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "";

export default () => {
  const { emailField, setEmailField } = useContext("");
  const { passwordField, setPasswordField } = useState("");

  const handleSignClick = async () => {
    if (emailField != "" && passwordField != "") {
      let json = await Api.signIn(emailField, passwordField);
      if (json.token) {
        await AsyncStorage.setItem("token", json.token);
        userDispatch({
          type: "setAvatar",
          payload: { avatar: json.data.avatar },
        });
        navigation.reset({ routes: [{ name: "Maintab" }] });
      } else {
        alert("E-mail e/ou senha errados!");
      }
    } else {
      alert("Preencha os campos!");
    }
  };
  const handleMessageButtonClick = () => {
    navigation.reset({ routes: "SignUp" });
  };
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <SingInput
          IconSvg={EmailIcon}
          placeholder={"Digite seu e-mail"}
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
        />
      </InputArea>
    </Container>
  );
};
