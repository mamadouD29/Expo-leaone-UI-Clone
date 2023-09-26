import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globaleStyle";

interface FlatButtonProps {
	title: string;
	onPress: () => void;
	bg?: string;
	txtColor?: string;
	brderColr?: string;
	ftSize?: number;
}

export default function FlatButton({
	title,
	bg,
	onPress,
	txtColor,
	brderColr,
	ftSize
}: FlatButtonProps) {
	return (
		<View
			style={[
				globalStyles.hCtr,
				styles.btnCtr,
				{ borderColor: brderColr ?? "#00000", backgroundColor: bg },
			]}
		>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => [globalStyles.hCtr,styles.btn,{ opacity: pressed ? 0.3 : 1 }]}
			>
				<Text style={[{ color: txtColor , fontSize: ftSize}]}>{title}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		justifyContent: "flex-start",
		borderWidth: 1,
		borderRadius: 10,
	},
	btn: {
		width: 120,
		flexGrow: 1,
		flexShrink: 1,
		padding: 20,

	},
	
});
