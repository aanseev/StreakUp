import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title:"Home",
                headerStyle: {
                    backgroundColor: "lightblue",
                },
            }}/>
            <Tabs.Screen name="users/[id]" options={{
                title: "User",
                headerStyle: {
                    backgroundColor: "orange",
                },
            }}/>
        </Tabs>
    );
}