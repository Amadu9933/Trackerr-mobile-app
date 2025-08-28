import React from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View } from "react-native";

// Define the interface for HistoryItem props
interface HistoryItemProps {
    address: string;
    time: string;
    earnings: string;
}

// Define the interface for history data
interface History {
    id: string;
    address: string;
    time: string;
    earnings: string;
}

const HistoryItem = ({ address, time, earnings }: HistoryItemProps) => (
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
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#2196F3" }}>{earnings}</Text>
    </View>
);

export default function History() {
    const history = [
        { id: "1", address: "123 Main St", time: "08/25/2025 10:15 AM", earnings: "$15.00" },
        { id: "2", address: "456 Oak Ave", time: "08/26/2025 11:00 AM", earnings: "$12.50" },
        { id: "3", address: "789 Pine Rd", time: "08/27/2025 12:30 PM", earnings: "$18.75" },
    ];

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF5E6" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5E6", padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fa8626ff", marginBottom: 20 }}>
                    History
                </Text>
                <FlatList
                    data={history}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }: { item: History }) => (
                        <HistoryItem address={item.address} time={item.time} earnings={item.earnings} />
                    )}
                    ListEmptyComponent={<Text style={{ fontSize: 16, color: "#666666" }}>No delivery history available.</Text>}
                />
            </SafeAreaView>
        </>
    );
}