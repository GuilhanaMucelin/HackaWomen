import React from 'react';
import { 
    enableScreens,
    ScreenStack
} from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';

enableScreens();
const Stack = createNativeStackNavigator();

import Home from './pages/Home/index'; 
import Audioteca from './pages/Audioteca/index';
import QuemVaiLer from './pages/QuemVaiLer';
import Colecao from "./pages/Colecao/index";
import ResumoLivro from './pages/ResumoLivro';
import Livro from './pages/Livro/index';
import ReviewLivro from './pages/ReviewLivro';
import GameApp from './pages/GameApp';

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}}  component={Home} />
                <Stack.Screen options={{ title: " " }} name="Audioteca" component={Audioteca} />
                <Stack.Screen options={{ title: " " }} name="QuemVaiLer"  component={QuemVaiLer} />
                <Stack.Screen options={{ title: " " }} name="Colecao"  component={Colecao} />
                <Stack.Screen options={{ title: " " }} name="ResumoLivro"  component={ResumoLivro} />
                <Stack.Screen options={{ title: " " }} name="Livro"  component={Livro} />
                <Stack.Screen options={{ title: " " }} name="ReviewLivro"  component={ReviewLivro} />
                <Stack.Screen options={{ title: " " }} name="GameApp"  component={GameApp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}