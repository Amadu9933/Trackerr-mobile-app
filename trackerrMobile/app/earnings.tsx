import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

export default function Earnings() {
    const [tab, setTab] = useState<"Today" | "Week" | "Month">("Today");
    const [filter, setFilter] = useState<"All" | "Base Pay" | "Tips" | "Bonuses" | "Deliveries" | "Hours">("All");

    // sample numbers per timeframe for Today / Week / Month
    const sample = {
        Today: { basePay: 96, tips: 24.5, bonuses: 7, deliveries: 12, hours: 6.5 },
        Week: { basePay: 560, tips: 120, bonuses: 30, deliveries: 68, hours: 35 },
        Month: { basePay: 2200, tips: 480, bonuses: 120, deliveries: 280, hours: 140 },
    } as const;

    const frame = sample[tab];
    const totalAll = frame.basePay + frame.tips + frame.bonuses;
    const hourlyRate = (totalAll / Math.max(frame.hours, 0.01)).toFixed(2);

    const filters: Array<"All" | "Base Pay" | "Tips" | "Bonuses" | "Deliveries" | "Hours"> = [
        "All",
        "Base Pay",
        "Tips",
        "Bonuses",
        "Deliveries",
        "Hours",
    ];

    const getDisplayed = () => {
        switch (filter) {
            case "All":
                return { value: totalAll, unit: "$" };
            case "Base Pay":
                return { value: frame.basePay, unit: "$" };
            case "Tips":
                return { value: frame.tips, unit: "$" };
            case "Bonuses":
                return { value: frame.bonuses, unit: "$" };
            case "Deliveries":
                return { value: frame.deliveries, unit: "" };
            case "Hours":
                return { value: frame.hours, unit: "h" };
            default:
                return { value: totalAll, unit: "$" };
        }
    };

    const displayed = getDisplayed();

    const formatDisplay = () => {
        if (displayed.unit === "$") return `$${(Number(displayed.value) || 0).toFixed(2)}`;
        if (displayed.unit === "h") return `${displayed.value}${displayed.unit}`;
        return `${displayed.value}`;
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF5E6" />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5E6" }}>
                <ScrollView contentContainerStyle={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "#111", marginBottom: 6 }}>Earnings</Text>
                    <Text style={{ color: "#666", marginBottom: 18 }}>Track your income and performance</Text>

                    {/* Tabs */}
                    <View style={{ flexDirection: "row", backgroundColor: "#F3F4F6", padding: 6, borderRadius: 10, marginBottom: 16 }}>
                        {(["Today", "Week", "Month"] as const).map((t) => (
                            <Pressable
                                key={t}
                                onPress={() => setTab(t)}
                                style={{
                                    backgroundColor: tab === t ? "#fff" : "transparent",
                                    paddingVertical: 8,
                                    paddingHorizontal: 18,
                                    borderRadius: 8,
                                    marginRight: 8,
                                    borderWidth: tab === t ? 0 : 0,
                                }}
                            >
                                <Text style={{ color: tab === t ? "#111" : "#666", fontWeight: tab === t ? "700" : "600" }}>{t}</Text>
                            </Pressable>
                        ))}
                    </View>

                    {/* Filter chips */}
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }} contentContainerStyle={{ paddingVertical: 6 }}>
                        {filters.map((f) => (
                            <Pressable
                                key={f}
                                onPress={() => setFilter(f)}
                                style={{
                                    backgroundColor: filter === f ? "#fff" : "transparent",
                                    paddingVertical: 8,
                                    paddingHorizontal: 14,
                                    borderRadius: 20,
                                    marginRight: 8,
                                    borderWidth: 1,
                                    borderColor: filter === f ? "#EDE4DE" : "transparent",
                                }}
                            >
                                <Text style={{ color: filter === f ? "#111" : "#666", fontWeight: filter === f ? "700" : "600" }}>{f}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>

                    {/* Main earnings card */}
                    <View style={{ backgroundColor: "#FFF8F3", borderColor: "#F2E6DE", borderWidth: 1, padding: 20, borderRadius: 12, marginBottom: 18 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                            <Text style={{ fontSize: 18, fontWeight: "800", color: "#222" }}>Today's Earnings</Text>
                            <Text style={{ fontSize: 16, color: "#1FA760", fontWeight: "800" }}>{formatDisplay()}</Text>
                        </View>

                        <Text style={{ fontSize: 36, color: "#1FA760", fontWeight: "900", marginTop: 6 }}>{formatDisplay()}</Text>
                        <Text style={{ color: "#999", marginTop: 6 }}>Total earned today</Text>

                        <View style={{ height: 1, backgroundColor: "#EDE4DE", marginVertical: 14 }} />

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: "#16A34A", fontWeight: "700" }}>↗ +15%</Text>
                                <Text style={{ color: "#666", fontSize: 12, marginTop: 6 }}>vs yesterday</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: "flex-end" }}>
                                <Text style={{ color: "#FF7A3A", fontWeight: "700" }}>${hourlyRate}/hr</Text>
                                <Text style={{ color: "#666", fontSize: 12, marginTop: 6 }}>hourly rate</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 16 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                                <Text style={{ color: "#666" }}>Base Pay ({frame.deliveries} deliveries)</Text>
                                <Text style={{ color: "#111", fontWeight: "700" }}>${frame.basePay}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                                <Text style={{ color: "#666" }}>Tips</Text>
                                <Text style={{ color: "#111", fontWeight: "700" }}>${frame.tips}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ color: "#666" }}>Bonuses</Text>
                                <Text style={{ color: "#111", fontWeight: "700" }}>${frame.bonuses}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Small summary cards */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 12 }}>
                        <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 10, padding: 14, borderWidth: 1, borderColor: "#F2E6DE" }}>
                            <Text style={{ color: "#FA7A3A", fontWeight: "700", marginBottom: 6 }}>Deliveries</Text>
                            <Text style={{ fontSize: 20, fontWeight: "800" }}>{frame.deliveries}</Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: "#fff", borderRadius: 10, padding: 14, borderWidth: 1, borderColor: "#F2E6DE" }}>
                            <Text style={{ color: "#1FA760", fontWeight: "700", marginBottom: 6 }}>Hours</Text>
                            <Text style={{ fontSize: 20, fontWeight: "800" }}>{frame.hours}h</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}