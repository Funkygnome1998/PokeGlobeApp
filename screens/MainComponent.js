import { View } from "react-native-animatable"
import HomeScreen from "./HomeScreen"
import { createStackNavigator } from "@react-navigation/stack" 
import { Platform } from "react-native"
import Constants from "expo-constants";
import RegionMapScreen from "./RegionMapScreen"
import PokedexScreen from "./PokedexScreen"



const MainNavigator = () => {

    const Stack = createStackNavigator();
    
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="Kanto"
          component={RegionMapScreen}
          options={() => (
            {headerShown: false }
          )}
        />
        <Stack.Screen
          name="Pokedex"
          component={PokedexScreen}
          options={() => (
            { headerShown: false}
          )}
        />
        
      </Stack.Navigator>
    );
  };

 

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
            }}
        >
            <MainNavigator/>

        </View>
    )
}

export default Main