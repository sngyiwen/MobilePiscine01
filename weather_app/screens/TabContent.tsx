import { StyleSheet, Text, View } from "react-native";

export default function TabContent({tabName, subtitle,}:{tabName: string; subtitle: string;}){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tabName}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null }
    </View>);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
});
