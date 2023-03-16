import { NavigationContainer } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import StackNavigator from "./stackNavigator";

const MainStack = () => {
  return (
    <NavigationContainer>
      <RootSiblingParent>
        <StackNavigator />
      </RootSiblingParent>
    </NavigationContainer>
  );
};

export default MainStack;
