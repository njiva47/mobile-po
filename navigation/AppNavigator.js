import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginScreen from '../screens/auth/LoginScreen'; // Utilisez l'écran de connexion unique
import DriverTabNavigator from './DriverTabNavigator';
import { AuthContext } from '../context/AuthContext';
import UserHomeScreen from '../screens/user/UserHomeScreen'; // Assurez-vous que cet écran existe

const Stack = createStackNavigator();

// Conteneur pour l'écran de connexion unique
const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Vous pouvez ajouter d'autres écrans d'inscription ici */}
    </Stack.Navigator>
  );
};

// Accueil utilisateur
const UserStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserHome"
        component={UserHomeScreen}
        options={{ title: 'Accueil' }}
      />
    </Stack.Navigator>
  );
};

// Gestion générale de la navigation
const AppNavigator = () => {
  const { user, userType } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        {user ? (
          userType === 'driver' ? (
            <DriverTabNavigator />
          ) : (
            <UserStackNavigator />
          )
        ) : (
          <AuthNavigator />
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default AppNavigator;