import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/globaleStyle";
import EmIcons from "../../shared/EmIcons";

interface OptionsBtnProps {
	title: string;
	icon: string;
	iconBg: string;
}

export function OptionsBtn({ title, icon, iconBg }: OptionsBtnProps) {
	return (
		<View style={[globalStyles.hCtr, styles.btnCtr]}>
			<Pressable
				onPress={() => {}}
				style={({ pressed }) => [
					globalStyles.hCtr,
					styles.btn,
					{ opacity: pressed ? 0.3 : 1 },
				]}
			>
				<View
					style={[
						globalStyles.hCtr,
						{ justifyContent: "flex-start" },
					]}
				>
					<View
						style={[
							globalStyles.hCtr,
							styles.iconCtr,
							{ backgroundColor: iconBg },
						]}
					>
						<EmIcons title={icon} color="white" size={20}/>
					</View>
					<Text style={[]}>{title}</Text>
				</View>
				<EmIcons title="right" />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		borderBottomWidth: 1,
		borderColor: "#e5e5e5",
		padding: 10,
    
	},
	btn: {
		justifyContent: "space-between",
		gap: 10,
		width: 120,
		flexShrink: 1,
		flexGrow: 1,
	},
	iconCtr: {
    width: 36,
    height: 36,
		borderRadius: 36,
	},
});
