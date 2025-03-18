import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, Activity, Scale, Baby } from 'lucide-react-native';

const mockData = [
  {
    id: 1,
    date: '2024-03-17T15:30:00Z',
    bloodPressure: { systolic: 120, diastolic: 80 },
    heartRate: 75,
    weight: 65,
    kicks: 10,
  },
  {
    id: 2,
    date: '2024-03-16T14:20:00Z',
    bloodPressure: { systolic: 118, diastolic: 78 },
    heartRate: 72,
    weight: 65.2,
    kicks: 12,
  },
];

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>History</Text>
        <Text style={styles.subtitle}>Your vitals log</Text>

        {mockData.map((entry) => (
          <View key={entry.id} style={styles.card}>
            <Text style={styles.date}>
              {new Date(entry.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </Text>

            <View style={styles.vitalsGrid}>
              <View style={styles.vitalItem}>
                <Heart size={20} color="#8B5CF6" />
                <Text style={styles.vitalLabel}>Blood Pressure</Text>
                <Text style={styles.vitalValue}>
                  {entry.bloodPressure.systolic}/{entry.bloodPressure.diastolic}
                </Text>
                <Text style={styles.vitalUnit}>mmHg</Text>
              </View>

              <View style={styles.vitalItem}>
                <Activity size={20} color="#8B5CF6" />
                <Text style={styles.vitalLabel}>Heart Rate</Text>
                <Text style={styles.vitalValue}>{entry.heartRate}</Text>
                <Text style={styles.vitalUnit}>bpm</Text>
              </View>

              <View style={styles.vitalItem}>
                <Scale size={20} color="#8B5CF6" />
                <Text style={styles.vitalLabel}>Weight</Text>
                <Text style={styles.vitalValue}>{entry.weight}</Text>
                <Text style={styles.vitalUnit}>kg</Text>
              </View>

              <View style={styles.vitalItem}>
                <Baby size={20} color="#8B5CF6" />
                <Text style={styles.vitalLabel}>Baby Kicks</Text>
                <Text style={styles.vitalValue}>{entry.kicks}</Text>
                <Text style={styles.vitalUnit}>kicks</Text>
              </View>
            </View>
          </View>
        ))}
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
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  date: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#374151',
    marginBottom: 16,
  },
  vitalsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  vitalItem: {
    width: '50%',
    padding: 8,
  },
  vitalLabel: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
    marginTop: 4,
  },
  vitalValue: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#1F2937',
    marginTop: 2,
  },
  vitalUnit: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#6B7280',
  },
});