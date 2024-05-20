import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, View, StyleSheet, Platform } from "react-native";

// StackNav Screens
import HomeStackNav from "../stacks/HomeStackNav";
import PinnedStackNav from "../stacks/PinnedStackNav";
import AppliedStackNav from "../stacks/AppliedStackNav";
import MessageStackNav from "../stacks/MessagesStackNav";
import SettingStackNav from "../stacks/SettingStackNav";

const Tab = createBottomTabNavigator();

// Screen Names Renters View
const home = "HomeStackNav";
const pinned = "PinnedStackNav";
const messages = "MessagesStackNav";
const settings = "SettingsStackNav";
const applied = "AppliedStackNav";

// Deactive Icon Images
const homeIcon = require("../../../assets/navigationBarIcons/nonactiveHome.png");
const pinnedIcon = require("../../../assets/navigationBarIcons/nonactivePin.png");
const messagesIcon = require("../../../assets/navigationBarIcons/nonactiveMessages.png");
const settingsIcon = require("../../../assets/navigationBarIcons/nonactiveSettings.png");

// Active Icon Images
const activeHomeIcon = require("../../../assets/navigationBarIcons/activeHome.png");
const activePinnedIcon = require("../../../assets/navigationBarIcons/activePin.png");
const activeMessagesIcon = require("../../../assets/navigationBarIcons/activeMessages.png");
const activeSettingsIcon = require("../../../assets/navigationBarIcons/activeSettings.png");

// Middle Button
const activeAppliedIcon = require("../../../assets/navigationBarIcons/applied.png");

function NavBarRenters() {
  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;
          let styleType;
          let routeName = route.name;

          if (routeName === home) {
            iconName = focused ? activeHomeIcon : homeIcon;
            styleType = styles.styleSmallIcons;
          } else if (routeName === pinned) {
            iconName = focused ? activePinnedIcon : pinnedIcon;
            styleType = styles.styleSmallIcons;
          } else if (routeName === messages) {
            iconName = focused ? activeMessagesIcon : messagesIcon;
            styleType = styles.styleSmallIcons;
          } else if (routeName === settings) {
            iconName = focused ? activeSettingsIcon : settingsIcon;
            styleType = styles.styleSmallIcons;
          } else if (routeName === applied) {
            iconName = activeAppliedIcon;
            styleType = styles.styleMiddleIcon;
          }
          if (routeName != applied)
            return (
              <View>
                <Image
                  source={iconName}
                  style={styleType}
                  resizeMode="contain"
                />
              </View>
            );
          else
            return (
              <View style={[styles.midIcon]}>
                <View style={[styles.midIconShadow]}>
                  <Image
                    source={iconName}
                    style={styleType}
                    resizeMode="contain"
                  />
                </View>
              </View>
            );
        },
      })}
    >
      <Tab.Screen name={home} component={HomeStackNav} />
      <Tab.Screen name={pinned} component={PinnedStackNav} />
      <Tab.Screen name={applied} component={AppliedStackNav} />
      <Tab.Screen name={messages} component={MessageStackNav} />
      <Tab.Screen name={settings} component={SettingStackNav} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  smallIconsView: {
    alignItems: "center",
    justifyContent: "center",
  },
  styleSmallIcons: {
    width: 25,
    height: 25,
    top: Platform.OS === "ios" ? 7 : 0,
  },
  midIcon: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 60,
    bottom: 10,
  },
  styleMiddleIcon: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  midIconShadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
  },
});

export default NavBarRenters;
