import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Button } from "@rneui/base";

export default (props) => {
    //const url = "https://reactnative.dev/movies.json";
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch(
                "http://10.133.131.132:3000/api/users"
            );
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <View>
                <Text>Exemplo API</Text>

                {isLoading ? (
                    <ActivityIndicator size={80} />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>
                                {item.first_name}, {item.last_name},{item.email}
                                {item.CreatedAt}
                            </Text>
                        )}
                    />
                )}
                <Button title="Atualizar" onPress={() => getMovies()} />
            </View>
        </>
    );
};
