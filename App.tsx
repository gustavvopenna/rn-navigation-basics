import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext';
import { MyDrawer } from './navigator/MyDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MyDrawer />
      </AuthProvider>
    </NavigationContainer>
  );
}
