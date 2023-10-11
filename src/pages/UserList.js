import { FlatList, Text, View } from "react-native";
import users from "../data/user";
import { Avatar, ListItem } from "@rneui/base";

export default (props) => {
    function getUserItem({ item: user }) {
        return (
            <ListItem>
                <Avatar rounded source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    name="edit"
                    color={"orange"}
                    size={25}
                    onPress={() => props.navigation.navigate("UserForm")}
                    type="Icon"
                />
                <ListItem.Chevron
                    name="delete"
                    color={"red"}
                    size={25}
                    type="material-community"
                />
            </ListItem>
        );
    }
    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={(user) => user.id}
                renderItem={getUserItem}
            />
        </View>
    );
};
