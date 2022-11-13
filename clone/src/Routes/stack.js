import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import EsqueciMinhaSenha from "../screens/EsqueciMinhaSenha";
import Login from "../screens/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Screen
                name="Login"
                component={Login}
            />

            <Screen
                name="EsqueciMinhaSenha"
                component={EsqueciMinhaSenha}
            />
        </Navigator>
    )

}