import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["props.pointerEvents is deprecated"]); // Ignore warning

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <TextInput
        style={{ height: 40, padding: 5, borderColor: 'gray', borderWidth: 1,position:"relative",top:30, }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
      />

      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <View style={[styles.line, menuOpen && styles.lineOpen]} />
        <View style={[styles.line, menuOpen && styles.lineOpen]} />
        <View style={[styles.line, menuOpen && styles.lineOpen]} />
      </TouchableOpacity>
       
      {menuOpen && (
        <View style={styles.menu}>
          <Text>Menu Content</Text>
        </View>
      )}
      </View>
      <Image
        style={styles.image}
        source={{ uri: "https://www.guideoftheworld.com/map/world/amp/world_map.jpg" }}
      />
      <Text style={styles.shophead}>Add Shopping List:</Text>
    </SafeAreaView>
  );
};

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </SafeAreaView>
  );
};

// ✅ Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

// ✅ Default Export to Fix the Error
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  menu: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    width: 150,
  },
  menuButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  line: {
    width: 30,
    height: 5,
    backgroundColor: "#333",
  },
  lineOpen: {
    backgroundColor: "transparent",
  },
  image: {
    width: "90%",
    height: 250,
    marginTop: 20,
    resizeMode: "contain",
    position: "absolute",
    top:0,
  },
  shophead: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
