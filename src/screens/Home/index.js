import React, { useState, useEffect } from "react";
import { Platform, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { request, PERMISSIONS } from "react-native-permissions";
import Geolocation from "@react-native-community/geolocation";

import Api from "../../Api";

import {} from "./styles";
