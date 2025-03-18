import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, Activity, Scale, Baby } from 'lucide-react-native';

export default function LogVitalsScreen() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [weight, setWeight] = useState('');
  const [kicks, setKicks] = useState('');

  const handleSubmit = () => {
    // TODO: Implement submission logic
    console.log({ systolic, diastolic, heartRate, weight, kicks });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Track My Pregnancy</Text>
        <Text style={styles.subtitle}>Log your daily vitals</Text>

        <View style={styles.card}>
          <View style={styles.inputGroup}>
            <View style={styles.inputHeader}>
              <Heart size={20} color="#8B5CF6" />
              <Text style={styles.inputLabel}>Blood Pressure</Text>
            </View>
            <View style={styles.bpContainer}>
              <TextInput
                style={[styles.input, styles.bpInput]}
                placeholder="Systolic"
                value={systolic}
                onChangeText={setSystolic}
                keyboardType="numeric"
              />
              <Text style={styles.bpSeparator}>/</Text>
              <TextInput
                style={[styles.input, styles.bpInput]}
                placeholder="Diastolic"
                value={diastolic}
                onChangeText={setDiastolic}
                keyboardType="numeric"
              />
              <Text style={styles.bpUnit}>mmHg</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputHeader}>
              <Activity size={20} color="#8B5CF6" />
              <Text style={styles.inputLabel}>Heart Rate</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter heart rate"
                value={heartRate}
                onChangeText={setHeartRate}
                keyboardType="numeric"
              />
              <Text style={styles.unit}>bpm</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputHeader}>
              <Scale size={20} color="#8B5CF6" />
              <Text style={styles.inputLabel}>Weight</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter weight"
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
              />
              <Text style={styles.unit}>kg</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.inputHeader}>
              <Baby size={20} color="#8B5CF6" />
              <Text style={styles.inputLabel}>Baby Kicks</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Number of kicks"
                value={kicks}
                onChangeText={setKicks}
                keyboardType="numeric"
              />
              <Text style={styles.unit}>kicks</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save Vitals</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#374151',
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#1F2937',
  },
  bpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bpInput: {
    flex: 1,
    maxWidth: '40%',
  },
  bpSeparator: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#374151',
    marginHorizontal: 12,
  },
  bpUnit: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
    marginLeft: 12,
  },
  unit: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
    marginLeft: 12,
    width: 50,
  },
  button: {
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});