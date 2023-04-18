import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
import { Container, Scroller } from "./styles";

export default () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
};
