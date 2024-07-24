import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text,deleteGoalHandler,id }) {
  return (
    <Pressable onPress={deleteGoalHandler.bind(this,id)}>
      <View style={myStyles.goalItem}>
        <Text style={myStyles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const myStyles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
