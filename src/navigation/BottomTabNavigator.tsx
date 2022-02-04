import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {View, Image, ImageURISource, Platform, Text} from 'react-native';

//-=-=-=-=-=-=-=- HOME TAB ROUTES -=-=-=-=-=-=-=-
import HomeScreen from '../containers/BottomTab/Home';
import CommonTab from '../containers/BottomTab/CommonTab';

import {
  BottomTabParamList,
  TabHomeParamList,
  TabBookingParamList,
  TabAccountParamList,
  TabNewsParamList,
  TabMessageParamList,
} from '../constants/types';
import {BottomTabC} from '../constants/navigation';
import {colors, getFontStyle, getScaleSize} from '../utils';
import useColorScheme from '../hooks/useColorScheme';
import DeviceInfo from 'react-native-device-info';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator(props: any) {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName={'TabHome'}
      tabBarOptions={{
        headerShown: false,
        activeTintColor: Colors[colorScheme].tabTextSelected,
        inactiveTintColor: Colors[colorScheme].tabTextUnselected,
        showLabel: false,
        style: {
          height:
            Platform.OS == 'android'
              ? getScaleSize(65)
              : DeviceInfo.hasNotch()
              ? getScaleSize(80)
              : getScaleSize(65),
          backgroundColor: colors.primaryHeader,
        },
      }}>
      <BottomTab.Screen
        name="TabHome"
        component={TabHomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              title="Home"
              color={color}
              icon={require('../assets/icons/home.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabBooking"
        component={TabBookingNavigator}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              title="Booking"
              color={color}
              icon={require('../assets/icons/bookmark.png')}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="TabMessage"
        component={TabMessageNavigator}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              title="Message"
              color={color}
              icon={require('../assets/icons/email.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="News"
        component={TabNewsNavigator}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              title="News"
              color={color}
              icon={require('../assets/icons/files.png')}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TabAccountNavigator}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              title="Reports"
              color={color}
              icon={require('../assets/icons/profile-user.png')}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  title: string;
  color: string;
  icon: ImageURISource;
}) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: Platform.OS == 'android' ? getScaleSize(5) : undefined,
        alignSelf: 'center',
        marginTop:
          Platform.OS == 'ios' && DeviceInfo.hasNotch()
            ? getScaleSize(10)
            : undefined,
      }}>
      <Image
        source={props.icon}
        resizeMode={'contain'}
        style={{
          height: getScaleSize(20),
          width: getScaleSize(20),
          tintColor: props.color,
          marginBottom: getScaleSize(3),
        }}
      />
      <Text
        style={{
          color: props.color,
          fontFamily: getFontStyle().normal.fontFamily,
        }}>
        {props.title}
      </Text>
    </View>
  );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- COMMON TABS SCREENS WHICH ARE USED IN MULTIPLE TABS FROM HERE  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function _commanResources() {
  return (
    <TabHomeStack.Screen
      name={BottomTabC.COMMON}
      component={CommonTab}
      options={{headerShown: false}}
    />
  );
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ^^^^ COMMON : TO HERE ^^^^ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name={BottomTabC.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </TabHomeStack.Navigator>
  );
}

const TabBookingStack = createStackNavigator<TabBookingParamList>();

function TabBookingNavigator() {
  return (
    <TabBookingStack.Navigator>
      <TabBookingStack.Screen
        name={BottomTabC.BOOKING}
        component={CommonTab}
        options={{headerShown: false}}
      />
    </TabBookingStack.Navigator>
  );
}

const TabNewsStack = createStackNavigator<TabNewsParamList>();

function TabNewsNavigator() {
  return (
    <TabNewsStack.Navigator>
      <TabNewsStack.Screen
        name={BottomTabC.NEWS}
        component={CommonTab}
        options={{headerShown: false}}
      />
      {_commanResources()}
    </TabNewsStack.Navigator>
  );
}

const TabMessageStack = createStackNavigator<TabMessageParamList>();

function TabMessageNavigator() {
  return (
    <TabMessageStack.Navigator>
      <TabMessageStack.Screen
        name={BottomTabC.MESSAGE}
        component={CommonTab}
        options={{headerShown: false}}
      />
      {_commanResources()}
    </TabMessageStack.Navigator>
  );
}

const TabAccountStack = createStackNavigator<TabAccountParamList>();

function TabAccountNavigator() {
  return (
    <TabAccountStack.Navigator>
      <TabAccountStack.Screen
        name={BottomTabC.ACCOUNT}
        component={CommonTab}
        options={{headerShown: false}}
      />
    </TabAccountStack.Navigator>
  );
}
