import { createStackNavigator } from "@react-navigation/stack";
import { Home, Splash } from "../views";
import { RootStackParamList } from "./routes.types";

const RootStack = createStackNavigator<RootStackParamList>();

export const Routes = () => (
  <RootStack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false
    }} 
  >
    <RootStack.Screen name="Splash" component={Splash} />
    <RootStack.Screen name="Home" component={Home} />
  </RootStack.Navigator>
);