import { Home, Splash } from "../views";
import { Stack } from "./util";

export const Routes = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false
    }} 
  >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);