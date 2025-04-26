import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DriverHomeScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
    console.log('Statut du conducteur:', isAvailable ? 'Indisponible' : 'Disponible');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue, Conducteur 🚖</Text>

        <Text style={styles.subtitle}>
          Statut actuel : 
          <Text style={isAvailable ? styles.statusAvailable : styles.statusUnavailable}>
            {' '}{isAvailable ? 'Disponible' : 'Indisponible'}
          </Text>
        </Text>

        <TouchableOpacity
          style={[
            styles.availabilityButton,
            isAvailable ? styles.available : styles.unavailable,
          ]}
          onPress={toggleAvailability}
          activeOpacity={0.8}
        >
          <Text style={styles.availabilityText}>
            {isAvailable ? 'Passer en Indisponible' : 'Passer en Disponible'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Vous pouvez modifier votre statut à tout moment pour indiquer si vous êtes prêt à prendre des courses.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#555',
  },
  statusAvailable: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  statusUnavailable: {
    color: '#F44336',
    fontWeight: 'bold',
  },
  availabilityButton: {
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 14,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  available: {
    backgroundColor: '#4CAF50',
  },
  unavailable: {
    backgroundColor: '#F44336',
  },
  availabilityText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  note: {
    marginTop: 30,
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },
});

export default DriverHomeScreen;
