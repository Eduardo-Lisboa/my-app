import { Text, View } from "react-native";
import Estilo from "./components/Estilo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FormLogin from "./pages/FormLogin";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";
import { Button, Icon } from "@rneui/base";
import ExemploUseState from "./pages/ExemploUseState";
import ExemploAPI from "./pages/ExemploAPI";

const Stack = createNativeStackNavigator();

export default (props) => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="API"
            screenOptions={{ headerBackTitleVisible: false }}
        >
            <Stack.Screen name="API" component={ExemploAPI} />
            <Stack.Screen name="Home" component={ExemploUseState} />

            <Stack.Screen name="FormLogin" component={FormLogin} />

            <Stack.Screen
                name="UserList"
                component={UserList}
                options={({ navigation }) => {
                    return {
                        title: "Lista de usuários",
                        headerRight: () => (
                            <Button
                                type="clear"
                                icon={
                                    <Icon
                                        name="add"
                                        size={25}
                                        color={"black"}
                                    />
                                }
                                onPress={() => navigation.navigate("UserForm")}
                            />
                        ),
                    };
                }}
            />

            <Stack.Screen
                name="UserForm"
                component={UserForm}
                options={{ title: "Cadastro de usuários" }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);

const minhaScreenOptions = {
    headerStyle: {
        backgroundColor: "#003f5c",
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {
        fontWeight: "bold",
    },
};
