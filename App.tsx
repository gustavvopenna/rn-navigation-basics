import { NavigationContainer } from '@react-navigation/native';
import { BasicDrawer } from './navigator/BasicDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <BasicDrawer />
    </NavigationContainer>
  );
}
