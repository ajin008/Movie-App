import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _Layout = () => {
  return <Tabs screenOptions={{ HeaderShown: false }}></Tabs>;
};

export default _Layout;
