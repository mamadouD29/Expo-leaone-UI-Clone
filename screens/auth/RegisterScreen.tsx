import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/globaleStyle";
import FlatButton from "../../components/shared/FlatButton";

export function RegisterScreen() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [cPassword, setCPassword] = useState<string>("");

	return (
		<View
			style={[globalStyles.container, globalStyles.bg, styles.container]}
		>
			<View style={[styles.inputCtr, { justifyContent: "flex-start" }]}>
				<Text style={[styles.txt, { fontSize: 24 }]}>Email</Text>
				<View style={[globalStyles.hCtr]}>
					<TextInput
						placeholder=""
						value={email}
						onChangeText={setEmail}
						style={[globalStyles.hCtr, styles.input]}
					/>
				</View>
			</View>
			<View style={[styles.inputCtr, { justifyContent: "flex-start" }]}>
				<Text style={[styles.txt, { fontSize: 24 }]}>
					Please input password
				</Text>
				<View style={[globalStyles.hCtr]}>
					<TextInput
						placeholder=""
						value={password}
						onChangeText={setPassword}
						style={[globalStyles.hCtr, styles.input]}
						secureTextEntry
					/>
				</View>
			</View>
			<View style={[styles.inputCtr, { justifyContent: "flex-start" }]}>
				<Text style={[styles.txt, { fontSize: 24 }]}>
					Confirm New Password
				</Text>
				<View style={[globalStyles.hCtr]}>
					<TextInput
						placeholder=""
						value={cPassword}
						onChangeText={setCPassword}
						style={[globalStyles.hCtr, styles.input]}
						secureTextEntry
					/>
				</View>
			</View>
			<View style={[{ gap: 10 }]}>
				<FlatButton
					title="Join Us"
					onPress={() => {}}
					ftSize={24}
					bg="white"
					txtColor={globalStyles.bg.backgroundColor}
					brderColr="white"
				/>
				<Text style={[styles.txt, { fontSize: 24 }]}>
					Sign up you agrre to abide by the User Agreement and Privacy
					Policy
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingHorizontal: 10,
		gap: 40,
	},
	inputCtr: {
		borderBottomWidth: 1,
		borderColor: "white",
		gap: 10,
	},
	input: {
		width: 120,
		flexGrow: 1,
		flexShrink: 1,
		padding: 10,
	},
	txt: {
		opacity: 0.5,
	},
});
