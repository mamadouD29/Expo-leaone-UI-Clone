import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	AuthScreen,
	ForgotPasswordScreen,
	LoginScreen,
	RegisterScreen,
} from "../../screens/auth/index";
import Tabs from "../tabs/Tabs";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
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
			<Stack.Screen
				name="ForgotPasswordScreen"
				component={ForgotPasswordScreen}
				options={{ title: "Password Reset" }}
			/>
			<Stack.Screen
				name="TabsScreen"
				component={Tabs}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
