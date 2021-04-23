import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreenGuest from '../screens/Guest/HomeScreenGuest';
import SearchScreen from '../screens/Guest/SearchScreenGuest';
import NewsScreen from '../screens/Guest/NewsScreen';
import Portofolio from '../screens/Portofolio';
import NewsDetail from '../screens/Guest/NewsDetail';
import ProfileScreen from '../screens/ProfileScreen';
import CategoryScreen from '../screens/CategoryScreen';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CategoryStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="CategoryScreen"
      component={CategoryScreen}
      options={{
        headerTitle: 'Category',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#C43131',
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="CategoryDetailScreen"
      component={CategoryDetailScreen}
      options={{
        title: 'Tournament',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#C43131',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerStyle: {
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#C43131" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const FeedStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Guest"
      component={HomeScreenGuest}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#C43131',
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="HomeProfile"
      component={ProfileScreen}
      options={{
        title: 'Profile',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#C43131',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#C43131" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="HomePortofolio"
      component={Portofolio}
      options={{
        title: 'Portofolio',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#C43131',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#C43131" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const NewsStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Esports News"
      component={NewsScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#C43131',
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="NewsContent"
      component={NewsDetail}
      options={{
        title: 'News Content',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#C43131',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerStyle: {
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 5}}>
            <Ionicons name="arrow-back" size={25} color="#C43131" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const SearchStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SearchNews"
      component={NewsDetail}
      options={{
        title: 'News Content',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#C43131',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#C43131" />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  const getTabBarVisibility = route => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#C43131',
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Category"
        component={CategoryStack}
        options={({route}) => ({
          tabBarLabel: 'Category',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="compass" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="News"
        component={NewsStack}
        options={({route}) => ({
          tabBarVisible: 'News',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={({route}) => ({
          tabBarVisible: 'Search',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
