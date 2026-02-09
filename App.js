import { Text, SafeAreaView } from 'react-native';
import Sobrenome from './src/Telas/Sobrenome';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Rafael</Text>
      <Sobrenome sobrenome="Silva" />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}