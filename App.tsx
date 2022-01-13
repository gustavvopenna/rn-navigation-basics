import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './navigator/MyDrawer';
// import { BasicDrawer } from './navigator/BasicDrawer';

export default function App() {
  return (
    <NavigationContainer>
      {/* <BasicDrawer /> */}
      <MyDrawer />
    </NavigationContainer>
  );
}
