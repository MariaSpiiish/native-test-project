import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer  } from "@react-navigation/native";
import { Home } from "./Home";
import { FullPost } from "./FullPost";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Home" component={Home} options={{ title: 'News' }} />
                <Stack.Screen name="Post" component={FullPost} options={{ title: 'Article' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}