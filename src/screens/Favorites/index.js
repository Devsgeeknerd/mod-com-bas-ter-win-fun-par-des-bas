import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";

import {
  Container,
  HeaderArea,
  HeaderTitle,
  Scroller,
  LoadingIcon,
  ListArea,
  EmptyWarning,
} from "./styles";

import BarberItem from "../../components/BarberItem";
import api from "../../Api";

export default () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {};
};
