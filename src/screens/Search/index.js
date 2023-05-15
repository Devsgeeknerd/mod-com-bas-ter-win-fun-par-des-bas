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
        if (res.list.length > 0) {
          setList(res.list);
        } else {
          setEmptyList(true);
        }
      } else {
        alert("Erro: " + res.error);
      }
    }

    setLoading();
  };

  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor="#ffffff"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autoFocus
          selectedTextOnFocus
        />
      </SearchArea>
      <Scroller>
        {loading && <LoadingIcon size="large" color="#000000" />}
      </Scroller>
    </Container>
  );
};
