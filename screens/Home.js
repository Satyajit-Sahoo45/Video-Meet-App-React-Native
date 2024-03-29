import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%' }}>
                {/* Header */}
                <Header />

                {/* search bar */}
                <SearchBar />

                {/* Menu buttons*/}
                <MenuButtons navigation={navigation} />

                {/* contacts menu */}
                <ContactsMenu />

            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15
    }
})