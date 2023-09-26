import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globaleStyle";
import EmIcons from "../../components/shared/EmIcons";
import FlatButton from "../../components/shared/FlatButton";
import { LoginScreen } from "./LoginScreen";
import { NavigationAndRouteProps } from "../../services/utils/navigationAndRouteProps";



export function AuthScreen({navigation}:NavigationAndRouteProps) {
	const joinUsHandler = () => {
		navigation.navigate("JoinUsScreen");
	};
	const loginHandler = () => {
		navigation.navigate("LoginScreen")
	};

	return (
		<View
			style={[
				globalStyles.container,
				globalStyles.vCtr,
				styles.container,
			]}
		>
			<View style={[]}>
				<EmIcons title="weight" color="#fafaf9" size={144} />
			</View>
			<View style={[{ gap: 20 }]}>
				<FlatButton
					title="Join Us"
					onPress={joinUsHandler}
					ftSize={20}
					txtColor="white"
					brderColr="white"
				/>
				<FlatButton
					title="Login"
					bg="#fafaf9"
					onPress={loginHandler}
					ftSize={20}
					txtColor="#38bdf8"
				/>
				<View style={[globalStyles.hCtr]}>
					<Text style={[{ fontSize: 24, opacity: 0.6 }]}>
						Login means that you agree to comply with the Leaone
						Bluetooth scales User Agreement and Privacy Policy
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#38bdf8",
		paddingHorizontal: 10,
		gap: 20,
		justifyContent: "space-around"
	},
});
