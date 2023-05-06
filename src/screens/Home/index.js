import React, { useState, useEffect } from "react";
import { Platform, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { request, PERMISSIONS } from "react-native-permissions";
import Geolocation from "@react-native-community/geolocation";

import Api from "../../Api";

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  ListArea,
} from "./styles";

import BarberItem from "../../components/BarberItem";

import SearchIcon from "../../assets/search.svg";
import MyLocationIcon from "../../assets/my_location.svg";

export default () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState("");
  const [coords, setCoords] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.OS === "ios"
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );

    if (result == "granted") {
      setLoading(true);
      setLocationText("");
    }
  };
};
