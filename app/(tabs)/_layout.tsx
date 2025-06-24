import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
    return(
        <Tabs>
            <Tabs.Screen
                name="index"
                options = {{
                    title: "Home",
                    tabBarIcon: ({color}) => <Ionicons name = "home-outline" color = {color} size={20}/> 
                }}
            />

            <Tabs.Screen
                name="Calculo/index"
                options = {{
                    title: "Calculo",
                    tabBarIcon: ({color}) => <Ionicons name = "bar-chart-outline" color = {color} size={20}/> 
                }}
            />

            <Tabs.Screen
                name="Perfil/index"
                options = {{
                    title: "Perfil",
                    tabBarIcon: ({color}) => <Ionicons name = "settings-outline" color = {color} size={20}/> 
                }}
            />
        </Tabs>
    );
} 