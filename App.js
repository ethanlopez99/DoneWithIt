import { StyleSheet,
  View, 
  Image,
  Dimensions,
  ImageBackground,
  Text
} from 'react-native';
import React from "react"


export default function App() {
  const height = Dimensions.get('screen')
  console.log(height)
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/background.jpg")} style={styles.image}>
          <Image source={require("./assets/logo-red.png")} style={styles.logo} />
          <Text style={styles.label}>Test</Text>
        </ImageBackground>
    </View>
    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  logo: {
    width: 100,
    alignSelf: 'center',
    flex: 0.4,
    resizeMode: 'contain'
  },
  label: {
    textAlign: 'center',
    
    }
});
