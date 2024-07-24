import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInputs";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
 
  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }
  function deleteGoalHandler(id){
    // console.log("delete");
    setCourseGoals(currentCourseGoals=>{
      //true then keep, false then drop the item from array
      return currentCourseGoals.filter((myGoal)=> myGoal.id !==id);
    })
  }
  return (
    <View style={myStyles.appContainer}>
      <GoalInput
        addGoalHandler={addGoalHandler}
      />

      <View style={myStyles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem id={itemData.item.id} text={itemData.item.text} deleteGoalHandler={deleteGoalHandler}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
