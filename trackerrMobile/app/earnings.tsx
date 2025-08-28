import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function Earnings() {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF5E6" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5E6", padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fa8626ff", marginBottom: 20 }}>
                    Earnings
                </Text>
                <View style={{ backgroundColor: "white", padding: 15, borderRadius: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#2196F3" }}>Total Earnings</Text>
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 5 }}>$1,245.50</Text>
                </View>
                <View style={{ backgroundColor: "white", padding: 15, borderRadius: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4CAF50" }}>Today’s Earnings</Text>
                    <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 5 }}>$127.00</Text>
                </View>
                <View style={{ backgroundColor: "white", padding: 15, borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FF9800" }}>Earnings Breakdown</Text>
                    <Text style={{ fontSize: 16, color: "#666666", marginTop: 5 }}>Deliveries: 12</Text>
                    <Text style={{ fontSize: 16, color: "#666666", marginTop: 5 }}>Hours: 6.5h</Text>
                    <Text style={{ fontSize: 16, color: "#666666", marginTop: 5 }}>Avg. per Delivery: $10.58</Text>
                </View>
            </SafeAreaView>
        </>
    );
}