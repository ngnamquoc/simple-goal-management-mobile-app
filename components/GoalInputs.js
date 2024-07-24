import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

export default function GoalInput({ addGoalHandler, visible,onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandlerHere() {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }
 

  return (
    <Modal visible={visible} animationType="slide">
      <View style={myStyles.inputContainer}>
        <TextInput
          style={myStyles.textInput}
          placeholder="Enter your course goal..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={myStyles.buttonContainer}>
          <View>
            <Button onPress={addGoalHandlerHere} title="Add goal" />
          </View>

          <View style={myStyles.button}>
            <Button title="Cancel" onPress={onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const myStyles = StyleSheet.create({
  inputContainer: {
    padding:16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop:16
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
