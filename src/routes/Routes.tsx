import { createStackNavigator } from "@react-navigation/stack";
import { Home, Splash } from "../views";
import { Pokemon } from "../views/Pokemon";
import { RootStackParamList } from "./routes.types";

const RootStack = createStackNavigator<RootStackParamList>();
const SearchStack = createStackNavigator();

export const Routes = () => (
  <RootStack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false
    }} 
  >
    <RootStack.Screen name="Splash" component={Splash} />
    {/* <RootStack.Screen name="Home" component={Home} /> */}
    <RootStack.Screen name="Home" component={SearchNavigator} />
  </RootStack.Navigator>
);

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false
      }} 
    >
    <SearchStack.Screen name="Search" component={Home} />
    <SearchStack.Screen name="Pokemon" component={Pokemon} />
    </SearchStack.Navigator>
  );
}