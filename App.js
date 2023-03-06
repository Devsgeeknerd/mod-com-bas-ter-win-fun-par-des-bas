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
