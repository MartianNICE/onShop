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
  style={styles.searchBar}
  placeholder="Search Here"
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

const MVPPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MVP Page</Text>
    </SafeAreaView>
  );
};
const AskAI = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ask AI</Text>
    </SafeAreaView>
  );
};

// ✅ Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MVP Page" component={MVPPage} />
      <Tab.Screen name="Ask  AI" component={AskAI} />
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
    top: 35,
    right: 10,
    width: 30,
    height: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    zIndex : 2,
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
    width: "100%",
    height: 500, // Covers from top to 500px
    resizeMode: "cover", // Ensures it fully covers the space
    position: "absolute",
    top: 0,
    zIndex: 0, // Moves it behind everything
  },  
  shophead: {
    fontSize: 36,
    // make the font to be bold
    fontWeight: "bold",
    zIndex: 1,
    position: "absolute",
    top: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchBar: {
    height: 45,
    width: '80%',
    alignSelf: 'auto',
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    borderColor: 'gray',
    borderWidth: 1,
    position: "relative",
    top: 30,
    zIndex: 1,
    
    // Floating effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
