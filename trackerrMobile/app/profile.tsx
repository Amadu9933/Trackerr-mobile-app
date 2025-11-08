import React from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

interface ProfileData {
    name: string;
    role?: string;
    status?: string;
    rating?: number;
    phone?: string;
    email?: string;
    vehicle?: string;
    deliveries?: number;
    totalEarned?: number;
    completionRate?: string;
    onTimeRate?: string;
}

export default function Profile() {
    const profileData: ProfileData = {
        name: "Alex Kumar",
        role: "Delivery Rider",
        status: "Active",
        rating: 4.9,
        phone: "+1 (555) 123-4567",
        email: "alex.kumar@email.com",
        vehicle: "Honda CB 150R - ABC-1234",
        deliveries: 1247,
        totalEarned: 15680.5,
        completionRate: "98.5%",
        onTimeRate: "96.2%",
    };

    const achievements = [
        { id: 1, title: "Top Performer", subtitle: "Completed 1000+ deliveries", emoji: "🏆" },
        { id: 2, title: "5-Star Hero", subtitle: "Maintained 4.9+ rating", emoji: "⭐" },
        { id: 3, title: "Speed Demon", subtitle: "Fastest delivery time", emoji: "⚡" },
        { id: 4, title: "Reliable Rider", subtitle: "99% completion rate", emoji: "🔒" },
    ];

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF5E6" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5E6" }}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    {/* Header */}
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#111", marginBottom: 8 }}>Profile</Text>
                    <Text style={{ color: "#666", marginBottom: 12 }}>Manage your account</Text>

                    {/* Profile card */}
                    <View style={{ backgroundColor: "#FFF8F3", borderColor: "#F2E6DE", borderWidth: 1, padding: 16, borderRadius: 12, marginBottom: 16, flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={{ uri: "https://placehold.co/80x80/eeeeee/9b9b9b.png?text=AK" }}
                            style={{ width: 72, height: 72, borderRadius: 36, marginRight: 12 }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: "800", color: "#111" }}>{profileData.name}</Text>
                            <Text style={{ color: "#666", marginTop: 4 }}>{profileData.role}</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                                <View style={{ backgroundColor: "#DFF7E7", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 12, marginRight: 8 }}>
                                    <Text style={{ color: "#0A8B4A", fontWeight: "700" }}>{profileData.status}</Text>
                                </View>
                                <Text style={{ marginLeft: 6, color: "#FBBF24", fontWeight: "700" }}>⭐ {profileData.rating}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Contact information */}
                    <View style={{ backgroundColor: "#fff", borderRadius: 12, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: "#F2E6DE" }}>
                        <Text style={{ fontSize: 16, fontWeight: "800", color: "#111", marginBottom: 8 }}>Contact Information</Text>
                        <View style={{ marginBottom: 8 }}>
                            <Text style={{ color: "#FF7A3A", fontWeight: "700" }}>📞 Phone</Text>
                            <Text style={{ color: "#666", marginTop: 4 }}>{profileData.phone}</Text>
                        </View>
                        <View style={{ marginBottom: 8 }}>
                            <Text style={{ color: "#FF7A3A", fontWeight: "700" }}>✉️ Email</Text>
                            <Text style={{ color: "#666", marginTop: 4 }}>{profileData.email}</Text>
                        </View>
                        <View>
                            <Text style={{ color: "#FF7A3A", fontWeight: "700" }}>🚗 Vehicle</Text>
                            <Text style={{ color: "#666", marginTop: 4 }}>{profileData.vehicle}</Text>
                        </View>
                    </View>

                    {/* Performance */}
                    <View style={{ backgroundColor: "#fff", borderRadius: 12, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: "#F2E6DE" }}>
                        <Text style={{ fontSize: 16, fontWeight: "800", color: "#111", marginBottom: 8 }}>Performance</Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
                            <View>
                                <Text style={{ color: "#666" }}>Deliveries</Text>
                                <Text style={{ fontSize: 20, fontWeight: "800", color: "#FF7A3A", marginTop: 6 }}>{profileData.deliveries}</Text>
                            </View>
                            <View style={{ alignItems: "flex-end" }}>
                                <Text style={{ color: "#666" }}>Total Earned</Text>
                                <Text style={{ fontSize: 20, fontWeight: "800", color: "#1FA760", marginTop: 6 }}>${profileData.totalEarned?.toLocaleString()}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ color: "#666" }}>Completion Rate</Text>
                                <Text style={{ fontWeight: "800", marginTop: 6 }}>{profileData.completionRate}</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Text style={{ color: "#666" }}>On Time Rate</Text>
                                <Text style={{ fontWeight: "800", marginTop: 6 }}>{profileData.onTimeRate}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Achievements */}
                    <View style={{ backgroundColor: "#fff", borderRadius: 12, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: "#F2E6DE" }}>
                        <Text style={{ fontSize: 16, fontWeight: "800", color: "#111", marginBottom: 12 }}>Achievements</Text>
                        {achievements.map((a) => (
                            <View key={a.id} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#FFF8F3", borderRadius: 10, padding: 10, marginBottom: 8 }}>
                                <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", marginRight: 12, borderWidth: 1, borderColor: "#F2E6DE" }}>
                                    <Text style={{ fontSize: 18 }}>{a.emoji}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontWeight: "800" }}>{a.title}</Text>
                                    <Text style={{ color: "#666", marginTop: 2 }}>{a.subtitle}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    {/* Actions */}
                    <TouchableOpacity style={{ backgroundColor: "#FF7A3A", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginBottom: 12 }}>
                        <Text style={{ color: "#fff", fontWeight: "800" }}>Edit Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: "#fff", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginBottom: 12, borderWidth: 1, borderColor: "#F2E6DE" }}>
                        <Text style={{ color: "#111", fontWeight: "700" }}>Website Information</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: "#fff", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginBottom: 12, borderWidth: 1, borderColor: "#F2E6DE" }}>
                        <Text style={{ color: "#111", fontWeight: "700" }}>Payment Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ backgroundColor: "#fff", paddingVertical: 12, borderRadius: 10, alignItems: "center", borderWidth: 1, borderColor: "#F2E6DE" }}>
                        <Text style={{ color: "#FF3B30", fontWeight: "700" }}>Sign Out</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}