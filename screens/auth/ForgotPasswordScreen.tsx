import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/globaleStyle";
import FlatButton from "../../components/shared/FlatButton";

export function ForgotPasswordScreen() {
	const [email, setEmail] = useState<string>("");
	const [newPassword, setNewPassword] = useState<string>("");
	const [cNewPassword, setCNewPassword] = useState<string>("");
	return (
		<View
			style={[globalStyles.container, globalStyles.bg, styles.container]}
		>
			<View style={[styles.inputCtr]}>
				<Text style={[globalStyles.txt]}>Email</Text>
				<View style={[globalStyles.hCtr]}>
					<TextInput
						value={email}
						placeholder=""
						onChangeText={setEmail}
						style={[
							globalStyles.hCtr,
							styles.input,
							globalStyles.txt,
						]}
					/>
				</View>
			</View>
			<View style={[styles.inputCtr]}>
				<Text style={[globalStyles.txt]}>New Password</Text>
				<View style={[globalStyles.hCtr]}>
					<TextInput
						value={newPassword}
						placeholder=""
						onChangeText={setNewPassword}
						style={[
							globalStyles.hCtr,
							styles.input,
							globalStyles.txt,
						]}
						secureTextEntry
					/>
				</View>
			</View>
			<View style={[styles.inputCtr]}>
				<Text style={[globalStyles.txt]}>Confirm New Password</Text>
				<View style={[globalStyles.hCtr]}>
					<TextInput
						value={cNewPassword}
						placeholder=""
						onChangeText={setCNewPassword}
						style={[
							globalStyles.hCtr,
							styles.input,
							globalStyles.txt,
						]}
						secureTextEntry
					/>
				</View>
			</View>
			<View style={[globalStyles.hCtr, styles.ctr, styles.inputCtr, {paddingBottom: 10,}]}>
				<TextInput
					value={cNewPassword}
					placeholder="Verify Code"
					onChangeText={setCNewPassword}
					style={[globalStyles.hCtr, globalStyles.txt]}
					secureTextEntry
				/>

				<Pressable
					style={({ pressed }) => [
						styles.btn,
						{ opacity: pressed ? 0.3 : 1 },
					]}
				>
					<Text style={[globalStyles.txt, { fontSize: 18 }]}>
						Obtain VCode
					</Text>
				</Pressable>
			</View>

			<FlatButton
				title="Submit"
				bg="#f9f9f9"
				onPress={() => {}}
				brderColr="#f9f9f9"
				ftSize={25}
				txtColor={globalStyles.bg.backgroundColor}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 20,
		padding: 10,
	},
	ctr: {
		justifyContent: "space-between",
	},
	inputCtr: {
		borderBottomWidth: 1,
		gap: 10,
		borderColor: "white",
	},
	input: {
		width: 120,
		flexGrow: 1,
		flexShrink: 1,
		justifyContent: "flex-start",
		gap: 0,
		paddingVertical: 10,
	},
	btn: {
        paddingVertical: 20,
		padding: 10,
		backgroundColor: "#f9f9f9",
		borderRadius: 10,
	},
});
