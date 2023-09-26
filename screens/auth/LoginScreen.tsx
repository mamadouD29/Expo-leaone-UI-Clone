import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/globaleStyle";
import EmIcons from "../../components/shared/EmIcons";
import FlatButton from "../../components/shared/FlatButton";
import { NavigationAndRouteProps } from "../../services/utils/navigationAndRouteProps";

export function LoginScreen({ navigation }: NavigationAndRouteProps) {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const joinUsHandler = () => {
		navigation.navigate("JoinUsScreen");
	};

const forgetPasswordHandler =()=>{
	navigation.navigate("ForgotPasswordScreen")
}
	return (
		<View
			style={[globalStyles.container, globalStyles.bg, styles.container]}
		>
			<View style={[styles.ctr]}>
				<View
					style={[
						globalStyles.hCtr,
						{ justifyContent: "flex-start" },
					]}
				>
					<EmIcons title="email" />
					<Text style={[styles.txt]}>Email</Text>
				</View>
				<View style={[globalStyles.hCtr, styles.inputCtr]}>
					<TextInput
						placeholder=""
						value={email}
						onChangeText={setEmail}
						style={[globalStyles.hCtr, styles.input]}
					/>
				</View>
			</View>
			<View style={[styles.ctr]}>
				<View
					style={[
						globalStyles.hCtr,
						{ justifyContent: "flex-start" },
					]}
				>
					<EmIcons title="lock" />
					<Text style={[styles.txt]}>Please input password</Text>
				</View>
				<View style={[globalStyles.hCtr, styles.inputCtr]}>
					<TextInput
						placeholder=""
						value={password}
						onChangeText={setPassword}
						style={[globalStyles.hCtr, styles.input]}
						secureTextEntry
					/>
				</View>
			</View>

			<FlatButton
				title="Login"
				onPress={() => {}}
				bg="white"
				txtColor={globalStyles.bg.backgroundColor}
				brderColr="white"
				ftSize={25}
			/>

			<View
				style={[globalStyles.hCtr, { justifyContent: "space-between" }]}
			>
				<Text style={[styles.txt]} onPress={joinUsHandler}>
					Join Us
				</Text>
				<Text style={[styles.txt]} onPress={forgetPasswordHandler}>
					Forget password?
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 20,
		padding: 10,
	},
	txt: {
		opacity: 0.5,
		fontSize: 24,
	},
	ctr: {
		gap: 20,
	},
	inputCtr: {
		borderBottomWidth: 1,
		gap: 10,
		borderColor: "#fafaf9",
	},
	input: {
		padding: 10,
		width: 120,
		flexGrow: 1,
		flexShrink: 1,
	},
});
