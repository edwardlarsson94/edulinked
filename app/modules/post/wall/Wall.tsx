import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function Wall() {
    const colorScheme = useColorScheme();
    return (
        <Tabs
        screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        }}>
            <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
            }}
            />
            <Tabs.Screen
            name="explore"
            options={{
                title: 'Explore',
                tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
                ),
            }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({

});
