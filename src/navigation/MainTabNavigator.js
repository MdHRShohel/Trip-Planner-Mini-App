import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/Home.svg';
import HomeFillIcon from '../assets/icons/HomeFill.svg';
import SettingsIcon from '../assets/icons/Settings.svg';
import SettingsFillIcon from '../assets/icons/SettingsFill.svg';
import TripsIcon from '../assets/icons/Trips.svg';
import TripsFillIcon from '../assets/icons/TripsFill.svg';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TripsScreen from '../screens/TripsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          size = size ?? 24;
          if (route.name === 'Home') {
            return focused ? <HomeFillIcon size={size} /> : <HomeIcon size={size} />;
          }
          if (route.name === 'Trips') {
            return focused ? <TripsFillIcon size={size} /> : <TripsIcon size={size} />;
          }
          if (route.name === 'Settings') {
            return focused ? <SettingsFillIcon size={size} /> : <SettingsIcon size={size} />;
          }
          return null;
        },
        tabBarActiveTintColor: '#171212',
        tabBarInactiveTintColor: '#876363',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trips" component={TripsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
