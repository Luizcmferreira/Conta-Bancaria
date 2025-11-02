import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeCliente from './src/HomeCliente';
import CadastroCliente from './src/CadastroCliente';
import DetalhesCliente from './src/DetalhesCliente';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#6200EE' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        
        <Stack.Screen
          name="Home"
          component={HomeCliente}
          options={{ title: 'Tela Inicial' }}
        />

        
        <Stack.Screen
          name="Cadastro"
          component={CadastroCliente}
          options={{ title: 'Cadastro de Usuário' }}
        />

        
        <Stack.Screen
          name="Detalhes"
          component={DetalhesCliente}
          options={{ title: 'Detalhes do Cliente' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}