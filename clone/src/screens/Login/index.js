import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/login.png";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <Gradient />
      <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={user.login}
        onChangeText={setUser}
        placeholder={'Digite seu Login'}
        placeholderTextColor={'gray'}
        style={styles.inputLogin}
      />
      <TextInput
        value={user.password}
        onChangeText={setUser}
        placeholder={'Digite sua Senha'}
        placeholderTextColor={'gray'}
        style={styles.inputPassword}
      />
      <TouchableOpacity>
        <Text style={styles.recover}>Esqueceu sua senha? Clique aqui</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.recover}>Não possui cadastro? Cadastre-se!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  button:{
    height: '33px',
    width: '131px',
    border: '2px solid #00FFFF',
    borderRadius: '5px',
    marginTop: '40px',
    marginBottom: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
  },

  textButton:{
    fontFamily: 'sans-serif',
    textAlign: 'center',
    color: "#120A8F",
    fontWeight: "bold",
    position: 'absolute',
  },

  recover:{
    color:'#120A8F',
    fontFamily: 'sans-serif',
    fontSize: '12px',
  },

  inputLogin: {
    height: '31px',
    width: '188px',
    border: '2px solid #00FFFF',
    borderRadius: '5px',
    paddingLeft: '5px',
    fontFamily: 'sans-serif',
    marginVertical: '30px',
    boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
  },

  inputPassword: {
    height: '31px',
    width: '188px',
    border: '2px solid #00FFFF',
    borderRadius: '5px',
    paddingLeft: '5px',
    fontFamily: 'sans-serif',
    marginBottom: '5px',
    boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
  },

  logo: {
    width: '130px',
    height: '130px',
    borderRadius: '100.125px',
    marginTop: '-200px',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#120A8F",
    fontWeight: 800,
    fontSize: '18px',
    marginTop: '42px',
  },
});