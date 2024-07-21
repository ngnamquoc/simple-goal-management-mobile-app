import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { Logs } from 'expo';


export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    console.log(enteredGoalText);
  }
  return (
    <View style={myStyles.appContainer}>
      <View style={myStyles.inputContainer}>
        <TextInput
          style={myStyles.textInput}
          placeholder="Enter your course goal..."
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title="Add goal" />
      </View>
      <View style={myStyles.goalsContainer}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

//initialize an instance from StyleSheet
const myStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
});
