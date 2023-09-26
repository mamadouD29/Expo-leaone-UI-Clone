import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/globaleStyle";
import { OptionsBtn } from "../../../components/ui/settings/index";
import FlatButton from "../../../components/shared/FlatButton";

export function SettingsScreen() {
	return (
		<View style={[globalStyles.container, styles.container]}>
			<View style={[styles.ctr]}>
				<OptionsBtn title="My Device" icon="scale" iconBg="#fdba74" />
				<OptionsBtn
					title="Account Settings"
					icon="settings"
					iconBg="#f97316"
				/>
				<OptionsBtn
					title="Unit Settings"
					icon="checked"
					iconBg="#fbbf24"
				/>
				<OptionsBtn
					title="Weight Remind"
					icon="time"
					iconBg="#d9f99d"
				/>
			</View>
			<View style={[styles.ctr]}>
				<OptionsBtn title="Feedback" icon="feedback" iconBg="#86efac" />
				<OptionsBtn
					title="About Leaone"
					icon="weight"
					iconBg="#22c55e"
				/>
			</View>
			<View style={[styles.ctr]}>
				<OptionsBtn
					title="Remove Cache"
					icon="cached"
					iconBg="#fb923c"
				/>
				<OptionsBtn
					title="Google Fit connection"
					icon="fit"
					iconBg="#fef2f2"
				/>
			</View>
			<View
				style={[globalStyles.container, styles.ctr, styles.lgtBtnCtr]}
			>
			
				<View style={[globalStyles.hCtr, styles.btnCtr]}>
					<Pressable
						onPress={() => {}}
						style={({ pressed }) => [
							globalStyles.hCtr,
              styles.btn,
							{ opacity: pressed ? 0.3 : 1 },
						]}
					>
						<Text style={[]}>Log Out</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#d6d3d1",
		gap: 10,

	},
	ctr: {
		backgroundColor: "#fafaf9",
	},
	lgtBtnCtr: {
		paddingTop: 40,
		paddingHorizontal: 40,
	},
	btnCtr: {
		borderWidth: 1,
		backgroundColor: "#f5f5f5",
		borderColor: "#e7e5e4",
		borderRadius: 20,
	},
	btn: {
		padding: 10,
	},
});
