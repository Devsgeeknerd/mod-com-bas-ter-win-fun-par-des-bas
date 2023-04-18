import React, { useState, useEffect } from "react";
import { RefreshControl } from "react-native";

import { Container, Scroller, ListArea, EmptyWarning } from "./styles";
import AppointmentItem from "../../components/AppointmentItem";
import Api from "../../Api";

export default () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {}, []);
};
