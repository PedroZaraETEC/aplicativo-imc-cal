import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'
import React from "react";

export default function TabLayout() {
    return(
        <Tabs>
            <Tabs.Screen
                name="explore"
                options={{
                    title:'Calcular IMC',
                    tabBarIcon: ({color}) => <Ionicons name="home-outline" color={color}/>
                }}
            />

            <Tabs.Screen
                name="index"
                options={{
                    title:'Home',
                    tabBarIcon: ({color}) => <Ionicons name="home-outline" color={color}/>
                }}
            />

            <Tabs.Screen
                name="perfil"
                options={{
                    title:'Perfil',
                    tabBarIcon: ({color}) => <Ionicons name="settings-outline" color={color}/>
                }}    
            />
            
        </Tabs>
    );
}