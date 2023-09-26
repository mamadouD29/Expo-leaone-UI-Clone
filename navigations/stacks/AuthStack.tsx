import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	AuthScreen,
	LoginScreen,
	RegisterScreen,
} from "../../screens/auth/index";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Auth"
				component={AuthScreen}
				options={{ title: "", headerShown: false }}
			/>
			<Stack.Screen
				name="JoinUsScreen"
				component={RegisterScreen}
				options={{ title: "Join Us" }}
			/>
			<Stack.Screen
				name="LoginScreen"
				component={LoginScreen}
				options={{ title: "Login" }}
			/>
		</Stack.Navigator>
	);
}
