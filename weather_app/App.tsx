import React, { useState } from "react";
import BottomBar from "./components/BottomBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import TabContent from "./screens/TabContent";

const tabNames = ["Currently", "Today", "Weekly"];

export default function App() {
    const [index, setIndex] = useState(0);

    return (
      <SafeAreaView style={styles.container}>
        <TabContent tabName={tabNames[index]} subtitle=""/>
        <BottomBar activeIndex={index} onSelect={setIndex} />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
