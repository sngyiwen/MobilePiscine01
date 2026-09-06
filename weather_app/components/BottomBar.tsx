import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Tab = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const tabs: Tab[] = [
  { name: "Currently", icon: "sunny-outline" },
  { name: "Today", icon: "calendar-outline" },
  { name: "Weekly", icon: "calendar-number-outline"},
]

type BottomBarProps = {
  activeIndex: number;
  onSelect: (index: number) => void;
};

export default function BottomBar({ activeIndex, onSelect }: BottomBarProps){
  return(
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        const isActive = index === activeIndex;
        return(
          <TouchableOpacity key={tab.name} style={styles.tab} onPress={() => onSelect(index)}>
            <Ionicons name={tab.icon} size={24} color={isActive ? "#2563eb" : "#888"}/>
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  activeLabel: {
    color: "#2563eb",
    fontWeight: "600",
  },
});