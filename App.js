import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:16}}>Platform : {Platform.OS == 'ios' ? 'ios' : 'android'}</Text>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            defaultValue={text}
            onChangeText = {txt=>setText(txt)}
            style={{borderWidth:1, padding: 10}}
          />
          <TouchableOpacity style={styles.btn} onPress={()=> console.log("Hello")}>
            <Text>Click Me</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bebebe',
    height: 1600,
    padding:20,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  btn: {
    padding:10,
    backgroundColor: '#FF6700',
    width:150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black'
  }
});
