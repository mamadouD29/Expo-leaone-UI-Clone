import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashBoardScreen } from "../../screens/main/dashboard/index";
import { FamilyMemberScreen } from "../../screens/main/members/index";
import { GoScreen } from "../../screens/main/go/index";
import { FaqScreen } from "../../screens/main/faq";
import { SettingsScreen } from "../../screens/main/settings";
import EmIcons from "../../components/shared/EmIcons";

const Tab = createBottomTabNavigator();

export default function Tabs() {
	return (
		<Tab.Navigator screenOptions={{}}>
			<Tab.Screen
				name="DashBoardScreen"
				component={DashBoardScreen}
				options={{
					tabBarIcon: () => <EmIcons title="dashboard" />,
					title: "Dashboard",
				}}
			/>
			<Tab.Screen
				name="FamilyMemberScreen"
				component={FamilyMemberScreen}
				options={{
					tabBarIcon: () => <EmIcons title="users" />,
					title: "Family Member",
				}}
			/>
			<Tab.Screen
				name="GoScreen"
				component={GoScreen}
				options={{
					tabBarIcon: () => <EmIcons title="scale" />,
					title: "Go",
				}}
			/>
			<Tab.Screen
				name="FaqScreen"
				component={FaqScreen}
				options={{
					tabBarIcon: () => <EmIcons title="faq" />,
					title: "FAQ",
				}}
			/>
			<Tab.Screen
				name="SettingsScreen"
				component={SettingsScreen}
				options={{
					tabBarIcon: () => <EmIcons title="settings" />,
					title: "Settings",
				}}
			/>
		</Tab.Navigator>
	);
}
