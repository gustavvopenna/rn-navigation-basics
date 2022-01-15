import { StyleSheet } from "react-native";

export const colors = {
  primary: '#FFA400',
  secondary: '#009FFD',
  tertiary: '#2A2A72',
  lightPurple: '#9797D8',
  darkGray: '#232528',
  gray: '#EAF6FF'
}

export const styles = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 40,
    fontWeight: '700'
  },
  bigButton: {
    marginRight: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  menuContainer: {
    margin: 25
  },
  menuButton: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItem: {
    fontSize: 20,
    fontWeight: '500'
  }
})