// React Assessments


// 1. Write a simple React component that simply prints "I am a component" to the screen. Be sure to include all necessary imports, exports, etc...
import React, { Component } from './App.js'

export default class Print extends Component {
  constructor(){
    super()
      this.class = {
        string = 'I am a component'
      }
    render(){
      return()
        <div>
          {this.class}
        </div>
      }
    }
  }
        //After, in the App.js file, I would import Print from react.js (this file) and call <Print /> in the return

// 2. Practice With Loops: In React, we often use the map function to iterate over an array held in state. To get more practice with this, write a vanilla javascript for loop that outputs the same thing as the map function below.


var stuffArray = [42, "Arthur Dent", 1978, "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

stuffArray.map(function(el, i){
  console.log(el + " is at index: " + i)
})
  let newArr = () => {
  for (let i=0; i < stuffArray.length; i++){
  return newArr.push()
  console.log(newArr([i]) + 'is at index' + i);
  }
}


// 3. Basic sorting: Find the cheapest price -- you are given a list of prices and need to find the single lowest price from the array. Write a function that takes in an array of numbers, and returns the lowest price

const numList = [13.99, 12.45, 98.34, 20.85, 2.85, 9.67]

function getLowNumber(){
  return numList.sort([0])

}

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
