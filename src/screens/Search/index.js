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
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [emptyList, setEmptyList] = useState(false);
  const [list, setList] = useState([]);

  const searchBarbers = async () => {
    setEmptyList(false);
    setLoading(true);
    setList([]);

    if (searchText != "") {
      let res = await Api.search(searchText);
      if (res.error == "") {
        if (res) {
        }
      }
    }
  };
};
