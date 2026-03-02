import { View } from 'react-native';
import Cesta from './src/Telas/Cesta';
import { SafeAreaView } from 'react-native-web';
import { 
      useFonts,
      Montserrat_400Regular,
      Montserrat_700Bold
       } from '@expo-google-fonts/montserrat';

      
export default function App() {
const [fontCarregada] = useFonts({
  "MontserratRegular": Montserrat_400Regular,
  "MontserratBold": Montserrat_700Bold,
});
if(!fontCarregada){
  return<View />
}
import { 
      useFonts,
      Artistic_400Regular,
      Artistic_700Bold
       } from '@expo-google-fonts/artistic';

      
export default function App() {
const [fontCarregada] = useFonts({
  "ArtisticRegular": Artistic_400Regular,
  "ArtisticBold": Artistic_700Bold,
});
if(!fontCarregada){
  return< Não carregou/>
}


  return (
    <SafeAreaView>
    <Cesta />

    </SafeAreaView>
  );
}