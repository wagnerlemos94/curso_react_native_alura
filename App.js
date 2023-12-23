import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/componetes/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBlod": Montserrat_700Bold
  });

  if(!fonteCarregada){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}