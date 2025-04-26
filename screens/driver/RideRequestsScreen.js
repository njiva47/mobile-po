import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const rideRequests = [
  { id: '1', pickup: 'Aéroport', destination: 'Centre-ville' },
  { id: '2', pickup: 'Gare', destination: 'Mahamasina' },
  { id: '3', pickup: 'Ambohijatovo', destination: 'Anosy' },
  { id: '4', pickup: 'Tana Water Front', destination: 'Ivato' },
  { id: '5', pickup: 'Ambohimanambola', destination: 'Andraharo' },
];

const RideRequestsScreen = () => {
  const insets = useSafeAreaInsets();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleRequestPress = (request) => {
    setSelectedRequest(request);
    setIsModalVisible(true);
  };

  const handleAccept = () => {
    setIsModalVisible(false);
    setSelectedRequest(null);
  };

  const handleReject = () => {
    setIsModalVisible(false);
    setSelectedRequest(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.title}>🚕 Demandes de Trajets</Text>
        <FlatList
          data={rideRequests}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRequestPress(item)} activeOpacity={0.8}>
              <View style={styles.card}>
                <Text style={styles.pickupText}>Départ : <Text style={styles.highlight}>{item.pickup}</Text></Text>
                <Text style={styles.destinationText}>Destination : <Text style={styles.highlight}>{item.destination}</Text></Text>
              </View>
            </TouchableOpacity>
          )}
        />

        <Modal
          visible={isModalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => {
            setIsModalVisible(false);
            setSelectedRequest(null);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selectedRequest && (
                <>
                  <Text style={styles.modalTitle}>📝 Détails de la Demande</Text>
                  <Text style={styles.modalLabel}>ID : <Text style={styles.modalInfo}>{selectedRequest.id}</Text></Text>
                  <Text style={styles.modalLabel}>Départ : <Text style={styles.modalInfo}>{selectedRequest.pickup}</Text></Text>
                  <Text style={styles.modalLabel}>Destination : <Text style={styles.modalInfo}>{selectedRequest.destination}</Text></Text>

                  <View style={styles.modalButtonsContainer}>
                    <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
                      <Text style={styles.buttonText}>Accepter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
                      <Text style={styles.buttonText}>Refuser</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => {
                      setIsModalVisible(false);
                      setSelectedRequest(null);
                    }}
                  >
                    <Text style={styles.closeButtonText}>Fermer</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
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
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  pickupText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },
  destinationText: {
    fontSize: 16,
    color: '#555',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 20,
    width: '85%',
    elevation: 6,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  modalInfo: {
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  rejectButton: {
    backgroundColor: '#F44336',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#1e90ff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default RideRequestsScreen;
