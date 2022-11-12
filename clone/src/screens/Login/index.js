import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Gradient } from "../../components/Gradient";

export default function Login() {
  return (
    <View style={styles.container}>
      <Gradient />
      <Text style={styles.title}>Login</Text>
      <Text>Digite seu login</Text>
      <Text>Digite sua senha</Text>
      <Text>Esqueceu sua senha? Clique aqui</Text>
      <Text>ENTRAR</Text>
      <Text>Não possui cadastro? Cadastre-se!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#120A8F",
    fontWeight: "bold",
    fontSize: 15,
  },
});
//background: #120A8F;
