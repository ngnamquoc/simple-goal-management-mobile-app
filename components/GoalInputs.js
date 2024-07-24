import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput({ addGoalHandler }) {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    function goalInputHandler(enteredText) {
        console.log(enteredText);
        setEnteredGoalText(enteredText);
      }

      function addGoalHandlerHere(){
        addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
      }

  return (
    <View style={myStyles.inputContainer}>
      <TextInput
        style={myStyles.textInput}
        placeholder="Enter your course goal..."
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button onPress={addGoalHandlerHere} title="Add goal" />
    </View>
  );
}

const myStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row", //by default is "column"
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
