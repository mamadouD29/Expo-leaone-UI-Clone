import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
	FontAwesome5,
	MaterialIcons,
	AntDesign,
	Feather,

} from "@expo/vector-icons";

interface EmIconsProps {
	title: string;
	color?: string;
	size?: number;
}

export default function EmIcons({ title, size, color }: EmIconsProps) {
	return (
		<>
			{title === "weight" && (
				<FontAwesome5
					name="weight"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "scale" && (
				<FontAwesome5
					name="cloudscale"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "faq" && (
				<FontAwesome5
					name="wrench"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "email" && (
				<MaterialIcons
					name="email"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "lock" && (
				<AntDesign
					name="lock"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "dashboard" && (
				<AntDesign
					name="dashboard"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "users" && (
				<Feather
					name="users"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "settings" && (
				<Feather
					name="settings"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({});
