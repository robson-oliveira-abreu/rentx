import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AppStackRoutes } from "./app.stack.routes";
import { MyCars } from "../screens/MyCars";
import { Profile } from "../screens/Profile";

import HomeSvg from '../assets/home.svg'
import CarSvg from '../assets/car.svg'
import PeopleSvg from '../assets/people.svg'

import { useTheme } from "styled-components";
import { Platform } from "react-native";

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.main,
                tabBarInactiveTintColor: theme.colors.text_details,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 58,
                    backgroundColor: theme.colors.background_primary
                }
            }}
        >
            <Screen
                name='Home'
                component={AppStackRoutes}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg width={24} height={24} color={color} />
                    )
                }}
            />
            <Screen
                name='MyCars'
                component={MyCars}
                options={{
                    tabBarIcon: ({ color }) => (
                        <CarSvg width={24} height={24} color={color} />
                    )
                }}
            />
            <Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <PeopleSvg width={24} height={24} color={color} />
                    )
                }}
            />
        </Navigator>
    )
}