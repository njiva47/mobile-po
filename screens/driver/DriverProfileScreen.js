import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const DriverProfileScreen = () => {
  const { user, logout } = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    logout();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.title}>Profil du Conducteur</Text>

        {user && (
          <View style={styles.profileCard}>
            <Text style={styles.label}>Nom :</Text>
            <Text style={styles.value}>{user.firstName} {user.lastName}</Text>

            <Text style={styles.label}>Email :</Text>
            <Text style={styles.value}>{user.email}</Text>

            {user.licenseNumber && (
              <>
                <Text style={styles.label}>Numéro de permis :</Text>
                <Text style={styles.value}>{user.licenseNumber}</Text>
              </>
            )}
            {user.carModel && (
              <>
                <Text style={styles.label}>Modèle de voiture :</Text>
                <Text style={styles.value}>{user.carModel}</Text>
              </>
            )}
            {user.carPlate && (
              <>
                <Text style={styles.label}>Plaque d'immatriculation :</Text>
                <Text style={styles.value}>{user.carPlate}</Text>
              </>
            )}
          </View>
        )}

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  profileCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#111',
    marginBottom: 5,
  },
  logoutButton: {
    backgroundColor: '#FF4D4F',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DriverProfileScreen;
