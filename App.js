export default () => {
  return (
    <userContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </userContextProvider>
  );
};
