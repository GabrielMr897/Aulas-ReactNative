import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";

const {Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes (){
    return(
        <Navigator 
        screenOptions = {{
            headerShown: false,
        }} initialRouteName="Login">
            <Screen
                name="Login"
                component={Login}
            />
        </Navigator>
    )

}