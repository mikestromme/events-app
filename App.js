import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:32}}>Hello World!!!</Text>
      <Text style={{fontSize:16}}>Platforn : {Platform.OS == 'ios' ? 'ios' : 'android'}</Text>
      <ScrollView>
        <View style={{backgroundColor: 'red', height: 1600}}>
          <Text>
            Hello There Mike!!
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
