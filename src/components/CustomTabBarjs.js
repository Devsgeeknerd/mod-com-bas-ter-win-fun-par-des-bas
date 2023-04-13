import { useContext } from "react";

const TabArea = styled.View`
  background-color: #4eadbe;
  height: 60px;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const TabItemCenter = styled.TouchableOpacity`
  background-color: #ffffff;
  width: 700px;
  height: 70px;
  margin-top: -20px;
  border: 3px solid #4eadbe;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
`;

const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export default ({ state, navigation }) => {
  const { state: user } = useContext(UserContext);

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo("Home")}>
        <HomeIcon
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          width="24"
          height="24"
          fill="#ffffff"
        />
      </TabItem>
      <TabItem onPress={}></TabItem>
      <TabItem></TabItem>
      <TabItem></TabItem>
      <TabItem></TabItem>
      <TabItem></TabItem>
    </TabArea>
  );
};
