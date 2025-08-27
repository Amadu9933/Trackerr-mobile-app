import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View>
        <MaterialIcons name="home" size={32} color="black" />
      </View>
    </View>
  );
}
