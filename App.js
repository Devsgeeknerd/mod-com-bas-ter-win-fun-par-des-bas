import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default () => {
  return (
    <userContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </userContextProvider>
  );
};
