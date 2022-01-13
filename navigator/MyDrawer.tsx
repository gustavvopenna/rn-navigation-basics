import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/globalStyles';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <InnerDrawer { ...props } />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const InnerDrawer = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://image.pngaaa.com/303/1721303-middle.png'
          }}
          />
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.menuButton}
        >
          <Text style={styles.menuItem}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuButton}
        >
          <Text style={styles.menuItem}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}