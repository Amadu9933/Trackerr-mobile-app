import { Entypo, FontAwesome } from "@expo/vector-icons"; // Import icon library
import { Tabs } from "expo-router";


export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ffae00ff", // Optional: Color for active tab
        tabBarInactiveTintColor: "#8E8E93", // Optional: Color for inactive tab
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home", // Tab label
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color="black" />
          ),
        }}
      />



      <Tabs.Screen
        name="deliveries"
        options={{
          title: "Deliveries", // Tab label
          tabBarIcon: ({ color, size }) => (
            <Entypo name="location" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings", // Tab label
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="dollar" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History", // Tab label
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={24} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile", // Tab label
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="dollar" size={24} color="black" />
          ),
        }}
      />

    </Tabs>
  );
}