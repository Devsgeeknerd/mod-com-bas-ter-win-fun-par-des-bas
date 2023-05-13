import React, { useState } from "react";
import {
  Container,
  SearchArea,
  SearchInput,
  Scroller,
  LoadingIcon,
  ListArea,
  EmptyWarning,
} from "./styles";

import BarberItem from "../../components/BarberItem";
import Api from "../../Api";

export default () => {
  const [searchText] = useState("");
};
