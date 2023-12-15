import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AtividadesProvider } from './contexts/AtividadesContext';
import EditarAtividade from './screens/EditarAtividade';
import MarkXXIII from './screens/MarkXXIII';

const Stack = createStackNavigator();

function App() {
  return (
    <AtividadesProvider>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="MarkXXIII">
            <Stack.Screen name="MarkXXIII" component={MarkXXIII} options={{ headerShown: false }}/>
            <Stack.Screen name="EditarAtividade" component={EditarAtividade} />
        </Stack.Navigator>
        </NavigationContainer>
    </AtividadesProvider>
  );
}

export default App;
