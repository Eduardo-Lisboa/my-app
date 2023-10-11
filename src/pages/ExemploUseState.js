import { useState, useEffect } from "react";
import { Button, Text, View } from "react-native";

export default (props) => {
    [titulo, setTitulo] = useState("Titulo Inicial");
    [titulo2, setTitulo2] = useState("Titulo 2 Inicial");

    useEffect(() => {
        console.warn(`Alteramdo o titulo ${titulo}`);
        setTitulo2("Alterado em cascata >D");
    }, [titulo2]);

    return (
        <>
            <View>
                <Text>Exemplo use Effefect</Text>
                <Text>{titulo}</Text>
                <Button
                    title="Alterar Titulo"
                    onPress={() => setTitulo("OI")}
                />
                <Text>{titulo2}</Text>
            </View>
        </>
    );
};
