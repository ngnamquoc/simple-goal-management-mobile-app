import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";


export default function GoalInput({ addGoalHandler, visible, onCancel }) {
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
        <Image style={myStyles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={myStyles.textInput}
          placeholder="Enter your course goal..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={myStyles.buttonContainer}>
          <View>
            <Button onPress={addGoalHandlerHere} title="Add goal" color="#5180f0"/>
          </View>

          <View style={myStyles.button}>
            <Button title="Cancel" onPress={onCancel} color="red"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const myStyles = StyleSheet.create({
  image:{
    width: 100,
    height:100,
    margin:20
  },
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
    color:"white",
    borderRadius:6,
    padding:16
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    borderRadius:6
  },
});
