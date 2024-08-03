
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Themes } from '../themes/styles';
import { Home, Queries, Explorer, Profile } from './importExport'

const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: 'Home',
    component: Home,
    icon: 'home'
  },
  {
    name: 'Consultas',
    component: Queries,
    icon: 'calendar'
  },
  {
    name: 'Pesquisar',
    component: Explorer,
    icon: 'search'
  },
  {
    name: 'Perfil',
    component: Profile,
    icon: 'home'
  },

];
const screenOptions = {
  tabBarStyle: {
    backgroundColor: Themes.colors.blue[800]
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#ffff"

};

export const Tabs = () => {



  return (
    <Tab.Navigator
      screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color}
                size={size} />)

          }}

        />

      ))}

    </Tab.Navigator>
  )
}