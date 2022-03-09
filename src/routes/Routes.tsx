import { createStackNavigator } from "@react-navigation/stack";
import { Search, Splash, Pokemon } from "../views";
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
    <RootStack.Screen name="Search" component={Search} />
    <RootStack.Screen name="Pokemon" component={Pokemon} />
  </RootStack.Navigator>
);
