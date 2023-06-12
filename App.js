import { StyleSheet,
  View, 
  Image,
  Dimensions
} from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function App() {
  const height = Dimensions.get('screen')
  console.log(height)
  return (
    <View style={
      styles.container
    }>
      <ImageBackground source={require('./assets/background.jpg')}/>

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
});
