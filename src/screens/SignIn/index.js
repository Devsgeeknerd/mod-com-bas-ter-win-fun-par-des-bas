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
} from "./styles";
