import React, { useState } from "react";
import { FlatList, Pressable, SafeAreaView, StatusBar, Text, View } from "react-native";

interface HistoryItemProps {
    orderId: string;
    when: string; // e.g. "Today, 2:30 PM"
    pickup: string;
    dropoff: string;
    eta?: string;
    distance?: number;
    price?: string;
    status?: "Completed" | "Pending" | "Cancelled";
}

interface History {
    id: string;
    orderId: string;
    when: string;
    pickup: string;
    dropoff: string;
    eta?: string;
    distance?: number;
    price?: string;
    status?: "Completed" | "Pending" | "Cancelled";
    period?: "today" | "thisWeek" | "older";
}

const StatsCard = ({ deliveries, earned, rating, distance }: { deliveries: number; earned: number; rating: number; distance: number }) => (
    <View style={{ backgroundColor: "#FFF8F3", borderColor: "#F2E6DE", borderWidth: 1, padding: 18, borderRadius: 12, marginBottom: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "800", color: "#222", marginBottom: 8 }}>This Week</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#FF7A3A", fontWeight: "800", fontSize: 18 }}>{deliveries}</Text>
                <Text style={{ color: "#666", marginTop: 6 }}>Deliveries</Text>
            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#1FA760", fontWeight: "800", fontSize: 22 }}>${earned}</Text>
                <Text style={{ color: "#666", marginTop: 6 }}>Earned</Text>
            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#111", fontWeight: "800", fontSize: 18 }}>{rating}</Text>
                <Text style={{ color: "#666", marginTop: 6 }}>Avg Rating</Text>
            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#111", fontWeight: "800", fontSize: 18 }}>{distance} km</Text>
                <Text style={{ color: "#666", marginTop: 6 }}>Distance</Text>
            </View>
        </View>
    </View>
);

const HistoryItem = ({ orderId, when, pickup, dropoff, eta, distance, price, status }: HistoryItemProps) => (
    <View style={{ backgroundColor: "#FFF8F3", borderColor: "#F2E6DE", borderWidth: 1, padding: 14, borderRadius: 10, marginBottom: 12 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <View>
                <Text style={{ fontSize: 16, fontWeight: "800", color: "#111" }}>Order {orderId}</Text>
                <Text style={{ color: "#666", marginTop: 4 }}>{when}</Text>
            </View>
            <View>
                <View style={{ backgroundColor: status === "Completed" ? "#DFF7E7" : "#FFF3E0", paddingVertical: 6, paddingHorizontal: 10, borderRadius: 12 }}>
                    <Text style={{ color: status === "Completed" ? "#0A8B4A" : "#FF7A3A", fontWeight: "700" }}>{status}</Text>
                </View>
            </View>
        </View>

        <View style={{ marginBottom: 8 }}>
            <Text style={{ color: "#444" }}>📍 <Text style={{ color: "#666" }}>{pickup}</Text></Text>
            <Text style={{ color: "#444", marginTop: 6 }}>🟢 <Text style={{ color: "#666" }}>{dropoff}</Text></Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {eta ? <Text style={{ color: "#666", marginRight: 12 }}>⏱ {eta}</Text> : null}
                {distance ? <Text style={{ color: "#666" }}>📏 {distance} km</Text> : null}
            </View>

            <Text style={{ color: "#0AA24A", fontWeight: "800" }}>${price}</Text>
        </View>
    </View>
);

export default function History() {
    const [tab, setTab] = useState<"All" | "Today" | "This Week">("All");

    const stats = { deliveries: 45, earned: 587.5, rating: 4.8, distance: 127.3 };

    const data: History[] = [
        {
            id: "1",
            orderId: "#DEL001",
            when: "Today, 2:30 PM",
            pickup: "McDonald's Downtown",
            dropoff: "Sunset Apartments",
            eta: "18 mins",
            distance: 2.3,
            price: "12.5",
            status: "Completed",
            period: "today",
        },
        {
            id: "2",
            orderId: "#DEL002",
            when: "Today, 11:05 AM",
            pickup: "Subway Central",
            dropoff: "Riverside Mall",
            eta: "22 mins",
            distance: 3.1,
            price: "10.0",
            status: "Completed",
            period: "today",
        },
        {
            id: "3",
            orderId: "#DEL003",
            when: "This Week, Mon 4:10 PM",
            pickup: "Green Garden",
            dropoff: "Maple Apartments",
            eta: "30 mins",
            distance: 5.2,
            price: "15.25",
            status: "Completed",
            period: "thisWeek",
        },
        {
            id: "4",
            orderId: "#DEL004",
            when: "This Week, Wed 12:00 PM",
            pickup: "Pizza Place",
            dropoff: "Hillview Condos",
            eta: "14 mins",
            distance: 1.9,
            price: "8.5",
            status: "Completed",
            period: "thisWeek",
        },
        {
            id: "5",
            orderId: "#DEL005",
            when: "Last Week, Fri 6:30 PM",
            pickup: "Burger Barn",
            dropoff: "Oakwood Estates",
            eta: "20 mins",
            distance: 3.8,
            price: "11.0",
            status: "Completed",
            period: "older",
        },
        {
            id: "6",
            orderId: "#DEL006",
            when: "This Week, Thu 9:15 AM",
            pickup: "Cafe Milano",
            dropoff: "Lakeside Park",
            eta: "12 mins",
            distance: 1.2,
            price: "6.75",
            status: "Completed",
            period: "thisWeek",
        },
        {
            id: "7",
            orderId: "#DEL007",
            when: "Today, 8:05 AM",
            pickup: "Early Bird Cafe",
            dropoff: "North Plaza",
            eta: "10 mins",
            distance: 0.9,
            price: "5.5",
            status: "Completed",
            period: "today",
        },
    ];

    const filtered = data.filter((item) => {
        if (tab === "All") return true;
        if (tab === "Today") return item.period === "today";
        if (tab === "This Week") return item.period === "thisWeek" || item.period === "today";
        return true;
    });

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF5E6" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5E6" }}>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "800", color: "#111" }}>Delivery History</Text>
                    <Text style={{ color: "#666", marginTop: 4 }}>Track your completed deliveries</Text>

                    <View style={{ marginTop: 12 }}>
                        <StatsCard deliveries={stats.deliveries} earned={stats.earned} rating={stats.rating} distance={stats.distance} />
                    </View>

                    <View style={{ flexDirection: "row", backgroundColor: "#F3F4F6", padding: 6, borderRadius: 10, marginTop: 8, marginBottom: 12 }}>
                        {(["All", "Today", "This Week"] as const).map((t) => (
                            <Pressable
                                key={t}
                                onPress={() => setTab(t)}
                                style={{
                                    backgroundColor: tab === t ? "#fff" : "transparent",
                                    paddingVertical: 8,
                                    paddingHorizontal: 14,
                                    borderRadius: 8,
                                    marginRight: 8,
                                }}
                            >
                                <Text style={{ color: tab === t ? "#111" : "#666", fontWeight: tab === t ? "700" : "600" }}>{t}</Text>
                            </Pressable>
                        ))}
                    </View>

                    <FlatList
                        data={filtered}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <HistoryItem
                                orderId={item.orderId}
                                when={item.when}
                                pickup={item.pickup}
                                dropoff={item.dropoff}
                                eta={item.eta}
                                distance={item.distance}
                                price={item.price}
                                status={item.status}
                            />
                        )}
                        ListEmptyComponent={<Text style={{ color: "#666" }}>No deliveries found.</Text>}
                    />
                </View>
            </SafeAreaView>
        </>
    );
}