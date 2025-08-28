import React, { useState } from "react";
import { FlatList, Pressable, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";

// Define the interface for DeliveryItem props
interface DeliveryItemProps {
    address: string;
    time: string;
    status: string;
}

// Define the interface for delivery data
interface Delivery {
    id: string;
    address: string;
    time: string;
    status: string;
}

const DeliveryItem = ({ address, time, status }: DeliveryItemProps) => (
    <View
        style={{
            backgroundColor: "white",
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}
    >
        <View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{address}</Text>
            <Text style={{ fontSize: 14, color: "#666666" }}>{time}</Text>
        </View>
        <Text
            style={{
                fontSize: 14,
                color: status === "Pending" ? "#FF9800" : status === "In Progress" ? "#4CAF50" : "#666666",
                fontWeight: "bold",
            }}
        >
            {status}
        </Text>
    </View>
);

export default function Deliveries() {
    const [activeTab, setActiveTab] = useState("Available"); // Default tab is "Available"
    const deliveries = [
        { id: "1", address: "123 Main St", time: "10:15 AM", status: "Pending" },
        { id: "2", address: "456 Oak Ave", time: "11:00 AM", status: "In Progress" },
        { id: "3", address: "789 Pine Rd", time: "12:30 PM", status: "Completed" },
    ];

    // Filter deliveries based on active tab
    const filteredDeliveries = deliveries.filter((delivery) => {
        if (activeTab === "Available") return delivery.status === "Pending";
        if (activeTab === "Active") return delivery.status === "In Progress";
        return false; // Default case (should not occur)
    });

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF5E6" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5E6", padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fa8626ff", marginBottom: 20 }}>
                    Deliveries
                </Text>
                {/* Tab Navigation */}
                <View style={{ flexDirection: "row", marginBottom: 20 }}>
                    <Pressable
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            backgroundColor: activeTab === "Available" ? "#FF6200" : "#FFF5E6",
                            borderRadius: 20,
                            marginRight: 10,
                        }}
                        onPress={() => setActiveTab("Available")}
                    >
                        <Text style={{ color: activeTab === "Available" ? "white" : "#fa8626ff", fontWeight: "bold" }}>
                            Available
                        </Text>
                    </Pressable>
                    <Pressable
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            backgroundColor: activeTab === "Active" ? "#FF6200" : "#FFF5E6",
                            borderRadius: 20,
                        }}
                        onPress={() => setActiveTab("Active")}
                    >
                        <Text style={{ color: activeTab === "Active" ? "white" : "#fa8626ff", fontWeight: "bold" }}>
                            Active
                        </Text>
                    </Pressable>
                </View>
                {/* Delivery List */}
                <FlatList
                    data={filteredDeliveries}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }: { item: Delivery }) => (
                        <DeliveryItem address={item.address} time={item.time} status={item.status} />
                    )}
                    ListEmptyComponent={
                        <Text style={{ fontSize: 16, color: "#666666" }}>
                            No {activeTab.toLowerCase()} deliveries.
                        </Text>
                    }
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: "#FF6200",
                        paddingVertical: 12,
                        paddingHorizontal: 20,
                        borderRadius: 20,
                        alignItems: "center",
                        marginTop: 20,
                    }}
                >
                    <Text style={{ color: "white", fontWeight: "bold" }}>Refresh Deliveries</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}