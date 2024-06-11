import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function UserPage() {
    const { id } = useLocalSearchParams<{ id: string}>();

    return (
        <View>
            <Text>User Page - {id}</Text>
        </View>
    );
}