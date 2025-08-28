import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [status, setStatus] = useState("offline");
  const router = useRouter();

  const handleStatusChange = (newStatus: React.SetStateAction<string>) => {
    setStatus(newStatus);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF5E6" />
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        {/* App Bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            backgroundColor: "#F5F5F5",
            borderBottomWidth: 1,
            borderBottomColor: "#E0E0E0",
          }}
        >
          {/* Logo */}
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fa8626ff" }}>
            Tracker
          </Text>
          {/* Welcome Message */}
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Welcome back, Alex
            </Text>
            <Text style={{ fontSize: 14, color: "#666666" }}>
              Ready to earn today?
            </Text>
          </View>
          {/* Icons */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <MaterialIcons name="notifications" size={24} color="#666666" />
            <MaterialIcons name="settings" size={24} color="#666666" />
          </View>
        </View>
        {/* Main Content */}
        <View style={{ padding: 20 }}>
          {/* Rider Status */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#FFF5E6",
              padding: 15,
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
                Rider Status
              </Text>
              <Text style={{ fontSize: 16, color: "#666666", marginBottom: 5 }}>
                You're {status === "offline" ? "offline" : "online"}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                <Pressable
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => handleStatusChange(status === "offline" ? "online" : "offline")}
                >
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: "#666666",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: status === "offline" ? "transparent" : "#666666",
                    }}
                  >
                    {status === "online" && (
                      <View
                        style={{
                          height: 10,
                          width: 10,
                          borderRadius: 5,
                          backgroundColor: "white",
                        }}
                      />
                    )}
                  </View>
                  <Text style={{ marginLeft: 5, fontSize: 14, color: "#A0A0A0" }}>
                    {status === "offline" ? "Offline" : "Online"}
                  </Text>
                </Pressable>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: status === "offline" ? "#FF6200" : "#4CAF50",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginTop: -35,
              }}
              onPress={() => handleStatusChange(status === "offline" ? "online" : "offline")}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                {status === "offline" ? "Go Online" : "Go Offline"}
              </Text>
            </TouchableOpacity>
          </View>
          {/* Stats */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <View style={{ alignItems: "center", backgroundColor: "#FFF5E6", padding: 20, borderRadius: 10, borderColor: "#FFAE00", borderWidth: 1 }}>
              <MaterialIcons name="timelapse" size={24} color="#FF9800" />
              <Text style={{ fontSize: 12, marginTop: 5 }}>Hours Today</Text>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>6.5h</Text>
            </View>
            <View style={{ alignItems: "center", padding: 20, backgroundColor: "#FFF5E6", borderRadius: 10, borderColor: "#FFAE00", borderWidth: 1 }}>
              <MaterialIcons name="location-on" size={24} color="#4CAF50" />
              <Text style={{ fontSize: 12, marginTop: 5 }}>Deliveries</Text>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>12</Text>
            </View>
            <View style={{ alignItems: "center", padding: 20, backgroundColor: "#FFF5E6", borderRadius: 10, borderColor: "#FFAE00", borderWidth: 1 }}>
              <MaterialIcons name="attach-money" size={24} color="#2196F3" />
              <Text style={{ fontSize: 12, marginTop: 5 }}>Earned</Text>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>$127</Text>
            </View>
          </View>
          {/* Quick Actions */}
          <View style={{ backgroundColor: "#FFF5E6", padding: 20, borderRadius: 10, borderColor: "#FFAE00", borderWidth: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
              Quick Actions
            </Text>
            <Pressable
              style={{
                backgroundColor: "white",
                padding: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}
              onPress={() => router.push("/deliveries")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="location-on" size={24} color="#FF9800" />
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                  View Available Deliveries
                </Text>
              </View>
            </Pressable>
            <View
              style={{
                backgroundColor: "white",
                padding: 15,
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="attach-money" size={24} color="#4CAF50" />
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                  Check Today's Earnings
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                padding: 15,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome name="history" size={24} color="blue" />
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                  View Available Deliveries
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}