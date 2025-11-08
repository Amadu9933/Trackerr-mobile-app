import React, { useState } from "react";
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

interface DeliveryItemProps {
    address: string;
    time?: string;
    orderId?: string;
    customer?: string;
    pickup?: string;
    dropoff?: string;
    eta?: string;
    distance?: string;
    items?: number;
    price?: string;
}

interface Delivery {
    id: string;
    address: string;
    time?: string;
    status: "Pending" | "In Progress" | "Completed";
    orderId?: string;
    customer?: string;
    pickup?: string;
    dropoff?: string;
    eta?: string;
    distance?: string;
    items?: number;
    price?: string;
}

/* regular Available card */
const DeliveryItem = ({
    address,
    orderId,
    customer,
    pickup,
    dropoff,
    eta,
    distance,
    items,
    price,
}: DeliveryItemProps) => (
    <View
        style={{
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 10,
            marginBottom: 12,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 6,
            elevation: 2,
        }}
    >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
            <View style={{ flex: 1, paddingRight: 8 }}>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "#222" }}>{address}</Text>
            </View>
            {price ? <Text style={{ color: "#0AA24A", fontWeight: "700", fontSize: 16 }}>${price}</Text> : null}
        </View>

        {(orderId || customer) && (
            <View style={{ marginTop: 6 }}>
                {orderId ? <Text style={{ color: "#666", fontSize: 13 }}>Order {orderId}</Text> : null}
                {customer ? <Text style={{ color: "#666", fontSize: 13, marginTop: 2 }}>Customer: {customer}</Text> : null}
            </View>
        )}

        <View style={{ marginTop: 10 }}>
            {pickup ? (
                <Text style={{ color: "#444", fontSize: 13, marginBottom: 4 }}>
                    📍 Pickup: <Text style={{ color: "#666", fontSize: 13 }}>{pickup}</Text>
                </Text>
            ) : null}
            {dropoff ? (
                <Text style={{ color: "#444", fontSize: 13 }}>
                    🟢 Delivery: <Text style={{ color: "#666", fontSize: 13 }}>{dropoff}</Text>
                </Text>
            ) : null}
        </View>

        <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
            {eta ? <Text style={{ color: "#666", marginRight: 12, fontSize: 13 }}>⏱ {eta}</Text> : null}
            {distance ? <Text style={{ color: "#666", marginRight: 12, fontSize: 13 }}>📏 {distance}</Text> : null}
            {typeof items === "number" ? <Text style={{ color: "#666", fontSize: 13 }}>📦 {items} items</Text> : null}
        </View>

        <View style={{ flexDirection: "row", marginTop: 12 }}>
            <TouchableOpacity
                style={{
                    backgroundColor: "#FF7A3A",
                    paddingVertical: 10,
                    paddingHorizontal: 14,
                    borderRadius: 8,
                    marginRight: 10,
                    flex: 1,
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "#fff", fontWeight: "700" }}>Accept Order</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    borderColor: "#DDD",
                    borderWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 14,
                    borderRadius: 8,
                    flex: 1,
                    alignItems: "center",
                }}
            >
                <Text style={{ color: "#333", fontWeight: "700" }}>View Details</Text>
            </TouchableOpacity>
        </View>
    </View>
);

/* aactive / active-delivery style card (matches provided screenshot) */
const ActiveDeliveryItem = ({
    address,
    orderId,
    customer,
    pickup,
    dropoff,
    eta,
    distance,
    items,
    price,
}: DeliveryItemProps) => (
    <View
        style={{
            backgroundColor: "#FFF8F3",
            padding: 18,
            borderRadius: 10,
            marginBottom: 12,
            borderWidth: 1,
            borderColor: "#F2E6DE",
        }}
    >
        {/* Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <Text style={{ fontSize: 18, fontWeight: "800", color: "#222" }}>Active Delivery</Text>
            <View style={{ backgroundColor: "#DFF7E7", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 12 }}>
                <Text style={{ color: "#0A8B4A", fontWeight: "700", fontSize: 12 }}>Going to Pickup</Text>
            </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
            <View style={{ flex: 1, paddingRight: 8 }}>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "#222" }}>{address}</Text>
                {orderId ? <Text style={{ color: "#666", fontSize: 13, marginTop: 6 }}>Order {orderId}</Text> : null}
                {customer ? <Text style={{ color: "#666", fontSize: 13, marginTop: 4 }}>Customer: {customer}</Text> : null}
            </View>
            {price ? <Text style={{ color: "#0AA24A", fontWeight: "700", fontSize: 16 }}>${price}</Text> : null}
        </View>

        <View style={{ marginTop: 12 }}>
            {pickup ? (
                <Text style={{ color: "#444", fontSize: 13, marginBottom: 6 }}>
                    📍 Pickup: <Text style={{ color: "#666", fontSize: 13 }}>{pickup}</Text>
                </Text>
            ) : null}
            {dropoff ? (
                <Text style={{ color: "#444", fontSize: 13 }}>
                    🟢 Delivery: <Text style={{ color: "#666", fontSize: 13 }}>{dropoff}</Text>
                </Text>
            ) : null}
        </View>

        <View style={{ flexDirection: "row", marginTop: 12, alignItems: "center" }}>
            {eta ? <Text style={{ color: "#666", marginRight: 12, fontSize: 13 }}>⏱ {eta}</Text> : null}
            {distance ? <Text style={{ color: "#666", marginRight: 12, fontSize: 13 }}>📏 {distance}</Text> : null}
            {typeof items === "number" ? <Text style={{ color: "#666", fontSize: 13 }}>📦 {items} items</Text> : null}
        </View>

        <View style={{ flexDirection: "row", marginTop: 14, alignItems: "center" }}>
            <TouchableOpacity
                style={{
                    backgroundColor: "#FF7A3A",
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    borderRadius: 8,
                    flex: 1,
                    alignItems: "center",
                    marginRight: 10,
                }}
            >
                <Text style={{ color: "#fff", fontWeight: "700" }}>🧭  Navigate</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#E6E6E6",
                    marginRight: 8,
                }}
            >
                <Text>📞</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#E6E6E6",
                }}
            >
                <Text>💬</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity
            style={{
                backgroundColor: "#1FA760",
                paddingVertical: 14,
                borderRadius: 8,
                marginTop: 14,
                alignItems: "center",
            }}
        >
            <Text style={{ color: "#fff", fontWeight: "700" }}>Confirm Pickup</Text>
        </TouchableOpacity>
    </View>
);

export default function Deliveries() {
    const [activeTab, setActiveTab] = useState<"Available" | "Active">("Available");

    const deliveries: Delivery[] = [
        {
            id: "1",
            address: "McDonald's Downtown",
            time: "10:15 AM",
            status: "Pending",
            orderId: "#DEL001",
            customer: "Sarah Johnson",
            pickup: "123 Main St, Downtown",
            dropoff: "456 Oak Ave, Riverside",
            eta: "18 mins",
            distance: "2.3 km",
            items: 2,
            price: "12.5",
        },
        {
            id: "2",
            address: "Oak Street Deli",
            time: "11:00 AM",
            status: "Pending",
            orderId: "#DEL002",
            customer: "Alex Martin",
            pickup: "789 Pine Rd",
            dropoff: "101 Maple St",
            eta: "25 mins",
            distance: "4.1 km",
            items: 3,
            price: "9.75",
        },
        {
            id: "3",
            address: "Green Garden",
            time: "12:30 PM",
            status: "Completed",
            orderId: "#DEL003",
            customer: "Jamie Lee",
            pickup: "222 Birch Ln",
            dropoff: "333 Cedar Ave",
            eta: "—",
            distance: "—",
            items: 1,
            price: "6.00",
        },
        {
            id: "4",
            address: "Subway Central",
            time: "09:40 AM",
            status: "Completed",
            orderId: "#DEL004",
            customer: "John Smith",
            pickup: "100 Center St, Downtown",
            dropoff: "200 River Rd, Eastside",
            eta: "20 mins",
            distance: "2.7 km",
            items: 2,
            price: "11.00",
        },
    ];

    const availableCount = deliveries.filter((d) => d.status === "Pending").length;
    const ActiveCount = deliveries.filter((d) => d.status === "Completed").length;

    const filteredDeliveries = deliveries.filter((delivery) => {
        if (activeTab === "Available") return delivery.status === "Pending";
        if (activeTab === "Active") return delivery.status === "Completed";
        return false;
    });

    return (
        <>
            <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#FFF5E6" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5E6", padding: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fa8626ff", marginBottom: 20 }}>
                    Deliveries
                </Text>

                <View style={{ flexDirection: "row", marginBottom: 16 }}>
                    <Pressable
                        onPress={() => setActiveTab("Available")}
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 18,
                            backgroundColor: activeTab === "Available" ? "#FF7A3A" : "#F3F4F6",
                            borderRadius: 14,
                            marginRight: 12,
                            minWidth: 140,
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: activeTab === "Available" ? "#fff" : "#333", fontWeight: "700" }}>
                            Available ({availableCount})
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setActiveTab("Active")}
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 18,
                            backgroundColor: activeTab === "Active" ? "#FF7A3A" : "#F3F4F6",
                            borderRadius: 14,
                            minWidth: 140,
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: activeTab === "Active" ? "#fff" : "#333", fontWeight: "700" }}>
                            Active ({ActiveCount})
                        </Text>
                    </Pressable>
                </View>

                <FlatList
                    data={filteredDeliveries}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        activeTab === "Active" ? (
                            <ActiveDeliveryItem
                                address={item.address}
                                time={item.time}
                                orderId={item.orderId}
                                customer={item.customer}
                                pickup={item.pickup}
                                dropoff={item.dropoff}
                                eta={item.eta}
                                distance={item.distance}
                                items={item.items}
                                price={item.price}
                            />
                        ) : (
                            <DeliveryItem
                                address={item.address}
                                time={item.time}
                                orderId={item.orderId}
                                customer={item.customer}
                                pickup={item.pickup}
                                dropoff={item.dropoff}
                                eta={item.eta}
                                distance={item.distance}
                                items={item.items}
                                price={item.price}
                            />
                        )
                    }
                    ListEmptyComponent={
                        <Text style={{ fontSize: 16, color: "#666666", marginTop: 6 }}>
                            No {activeTab.toLowerCase()} deliveries.
                        </Text>
                    }
                />
            </SafeAreaView>
        </>
    );
}