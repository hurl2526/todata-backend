/********************
 * HELPER FUNCTIONS *
 ********************/
const getTodoName = function(obj) {
  return obj.text
}
const getCompleteness = function() {
}
const getPriority = function(obj) {
  return obj.priority; 
}
const isComplete = function(obj) {
  return obj.complete;
}
const isHighPriority = function(obj) {
  return obj.priority === 2
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/
const names = function(todos) {
  return todos.map(getTodoName)
}

const priorities = function(todos) {
  return todos.map(getPriority)
}

const highOrLow = function(obj) {
  if (obj.priority === 2){
    return 'High'
  } else return 'Low'
}
const nameAndPriority = function(obj){
  return getTodoName(obj) + ' - ' + highOrLow(obj)
}
const namesAndPriorities = function(array) {
  return array.map(nameAndPriority)
}
const notComplete = function(obj){
  return obj.complete === false
}
const justNotComplete = function(todos) {
  return todos.filter(notComplete)
}
const complete = function(obj){
  return obj.complete === true
}
const justComplete = function(todos) {
  return todos.filter(complete)
}
const prioritiesHelper = function(obj){
  return obj.priority > 1
}
const priority2Only = function(todos) {
  return todos.filter(prioritiesHelper)
}
const prioritiesHelper2 = function(obj){
  return obj.priority < 2
} 
const priority1Only = function(todos) {
  return todos.filter(prioritiesHelper2)
}


module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
}
