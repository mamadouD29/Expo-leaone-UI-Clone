import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bg: {
		backgroundColor: "#38bdf8",
	},
	hCtr: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
	},
	vCtr: {
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
});
