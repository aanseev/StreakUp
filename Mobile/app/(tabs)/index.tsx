import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function HomePage() {
    return (
        <View>
            <Text>Home page</Text>
            <Link href="/profile">Profile</Link>
        </View>
    );
}