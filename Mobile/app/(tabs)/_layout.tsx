import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons/';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';


export default function TabsLayout() {
    const ICON_SIZE = 46;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
                <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
                <Tabs
                    screenOptions={{
                        tabBarStyle: {
                            position: 'absolute',
                            bottom: 10,
                            left: 10,
                            right: 10,
                            elevation: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            borderRadius: 100,
                            height: 60,
                        },
                    }}
                >
                    <Tabs.Screen name="index" options={{
                        title:"Home",
                        headerTransparent: true,
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: '#fff',
                        tabBarIcon: ({ color, focused }) => (
                            <MaterialCommunityIcons 
                                name={focused ? 'home' : 'home-outline'}
                                size={ICON_SIZE} 
                                color={color} 
                            />),
                    }}/>
                    <Tabs.Screen name="newStreak" options={{
                        title:"New",
                        tabBarShowLabel: false,
                        headerTransparent: true,
                        tabBarActiveTintColor: '#fff',
                        tabBarIcon: ({ color, focused }) => (
                            <MaterialCommunityIcons 
                                name={focused ? 'plus-circle' : 'plus'}
                                size={ICON_SIZE} 
                                color={color} 
                            />),
                    }}/>
                    <Tabs.Screen name="profile" options={{
                        title: "Profile",
                        tabBarShowLabel: false,
                        headerTransparent: true,
                        tabBarActiveTintColor: '#fff',
                        tabBarIcon: ({ color, focused }) => (
                            <MaterialCommunityIcons 
                                name={focused ? 'account-circle' : 'account-circle-outline'} 
                                size={ICON_SIZE} 
                                color={color} 
                            />
                        )
                    }}/>
                </Tabs>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}