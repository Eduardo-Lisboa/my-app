import {
    Button,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Estilo from "../components/Estilo";
import { useState } from "react";

export default (props) => {
    [valorLogin, setValorLogin] = useState("");
    [valorSenha, setValorSenha] = useState("");
    return (
        <KeyboardAvoidingView style={Estilo.loginContainer}>
            <View style={Estilo.loginContainer}>
                <Image source={require("../assets/images2.png")} />
                <Text>Form Login</Text>
                <TextInput
                    style={Estilo.loginTextInput}
                    placeholder="Digite o login"
                    value={valorLogin}
                    onChange={(e) => setValorLogin(e.target.value)}
                    textContentType="password"
                    keyboardType="visible-password"
                />
                <TextInput
                    style={Estilo.loginTextInput}
                    placeholder="Digite a senha"
                    value={valorSenha}
                    onChange={(e) => setValorSenha(e.target.value)}
                    secureTextEntry={true}
                />
                <Text style={Estilo.loginForgetPassword}>
                    Esqueceu a senha?
                </Text>

                <TouchableOpacity
                    style={Estilo.loginButton}
                    onPress={() => props.navigation.navigate("UserList")}
                >
                    <Text style={Estilo.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <Text style={Estilo.loginButtonText}>Criar Conta</Text>
            </View>
        </KeyboardAvoidingView>
    );
};
