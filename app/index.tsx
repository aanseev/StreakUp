import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function HomePage() {
    return (
        <View>
            <Text>Home page</Text>
            <Link href="/users/1">User 1</Link>
            <Pressable onPress={() => router.push("users/2")}>
                <Text>Go to user 2</Text>
            </Pressable>
        </View>
    );
}