import { useState } from "react";
import { Text, View } from "react-native";
import { Gradient } from "../../components/Gradient";

export default function Login() {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });

  return (
    <View >
      <Gradient />
      <Text >Login</Text>
    </View>
  );
}
