import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['props.pointerEvents is deprecated']);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.currentloc}>Location Currently</Text>
      <Text style={styles.userDetails}>User Details</Text>
      <Text style={styles.shophead}>Add Shopping List:</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://www.guideoftheworld.com/map/world/amp/world_map.jpg' }}
      />
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

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  currentloc: {
    fontSize: 18,
    marginTop: 20,
  },
  userDetails: {
    fontSize: 18,
    marginTop: 10,
  },
  shophead: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  image: {
    width: '90%',
    height: 250,
    marginTop: 20,
    resizeMode: 'contain',
  }
});

export default App;
