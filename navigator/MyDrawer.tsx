import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/globalStyles';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <InnerDrawer { ...props } />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
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
          onPress={() => navigation.navigate('Tabs')}
          style={styles.menuButton}
        >
          <Ionicons name='albums-outline' size={30} style={{ marginRight: 5 }} />
          <Text style={styles.menuItem}>Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuButton}
        >
          <Ionicons name='settings-outline' size={30} style={{ marginRight: 5 }} />
          <Text style={styles.menuItem}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}