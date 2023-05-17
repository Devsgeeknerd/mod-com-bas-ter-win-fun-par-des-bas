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
      }
    }
  };
};
