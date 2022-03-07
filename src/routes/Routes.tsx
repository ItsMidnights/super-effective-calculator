import { createStackNavigator } from "@react-navigation/stack";
import { Search, Splash, Pokemon } from "../views";
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
    <RootStack.Screen name="Search" component={SearchNavigator} />
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
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="Pokemon" component={Pokemon} />
    </SearchStack.Navigator>
  );
}