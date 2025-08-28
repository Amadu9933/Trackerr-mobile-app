import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

// Define the interface for Profile data (optional, for future expansion)
interface ProfileData {
    name: string;
    email: string;
    totalDeliveries: number;
    totalHours: number;
}

export default function Profile() {
    const profileData = {
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        totalDeliveries: 45,
        totalHours: 28.5,
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF5E6" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5E6", padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fa8626ff", marginBottom: 20 }}>
                    Profile
                </Text>
                <View style={{ backgroundColor: "white", padding: 15, borderRadius: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4CAF50" }}>Personal Info</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>Name: {profileData.name}</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>Email: {profileData.email}</Text>
                </View>
                <View style={{ backgroundColor: "white", padding: 15, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FF9800" }}>Rider Stats</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>Total Deliveries: {profileData.totalDeliveries}</Text>
                    <Text style={{ fontSize: 16, marginTop: 5 }}>Total Hours: {profileData.totalHours}h</Text>
                </View>
            </SafeAreaView>
        </>
    );
}