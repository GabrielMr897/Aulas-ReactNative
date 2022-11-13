import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Butao, InputLogin, InputPassword, Recover, Title } from "./styles";

export default function Login() {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });
  const navigation = useNavigation();
  
  function screenEsqueciMinhaSenha() {
    navigation.navigate("EsqueciMinhaSenha");
  }
  return (
    <Container>
      <Gradient />
      <Logo source={logo}/>
      <Title>Login</Title>
      <InputLogin
        value={user.login}
        onChangeText={setUser}
        placeholder={'Digite seu Login'}
        placeholderTextColor={'gray'}
        
      />
      <InputPassword
        value={user.password}
        onChangeText={setUser}
        placeholder={'Digite sua Senha'}
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity onPress={screenEsqueciMinhaSenha}>
        <Recover>Esqueceu sua senha? Clique aqui</Recover>
      </TouchableOpacity>
      <Butao>
        <Entrar>ENTRAR</Entrar>
      </Butao>
      <TouchableOpacity>
        <Recover >Não possui cadastro? Cadastre-se!</Recover>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </Container>
  );
}
