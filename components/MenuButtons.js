import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const items = [
    {
        id: 1,
        name: "video-camera",
        title: "New Meeting",
        customColor: "#FF751F"
    },
    {
        id: 2,
        name: "plus-square",
        title: "Join",
    },
    {
        id: 3,
        name: "calendar",
        title: "Schedule",
    },
    {
        id: 4,
        name: "upload",
        title: "Share Screen",
    },
]

const MenuButtons = ({ navigation }) => {

    const openMeeting = () => {
        navigation.navigate('Room')
    }

    return (
        <View style={styles.container}>
            {
                items.map((item, index) => {
                    return (
                        <View style={styles.buttonContainer} key={item.id || index}>
                            <TouchableOpacity
                                onPress={() => openMeeting()}
                                style={{
                                    ...styles.button,
                                    backgroundColor: item?.customColor ? item.customColor : "#0470DC"
                                }}
                            >
                                <FontAwesome name={item.name} size={23} color={"#efefef"} />
                            </TouchableOpacity>
                            <Text style={styles.menuText}>
                                {item.title}
                            </Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        marginBottom: 10,
        borderBottomColor: "#1F1F1F",
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonContainer: {
        alignItems: 'center',
        flex: 1
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuText: {
        color: "#858585",
        fontSize: 12,
        paddingTop: 10,
        fontWeight: "600"
    }
})