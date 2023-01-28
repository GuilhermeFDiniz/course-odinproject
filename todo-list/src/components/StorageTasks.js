function addTask(object){
  if(!localStorage.getItem('Tasks')){
    localStorage.setItem('Tasks', JSON.stringify([object]))
  } else {
    const Tasks = JSON.parse(localStorage.getItem('Tasks'))
    Tasks.push(object)
    localStorage.setItem('Tasks', JSON.stringify(Tasks))
  }
}

function getTaskList(){
  return JSON.parse(localStorage.getItem('Tasks'))
}

function removeTask(name){
  const taskList = JSON.parse(localStorage.getItem('Tasks'))
  taskList.filter(element => {
    element.name === name
  })
}

function editTask(name, body){
  const taskList = JSON.parse(localStorage.getItem('Tasks'))

}

function getTask(name) {
  const taskList = JSON.parse(localStorage.getItem('Tasks'))
  return taskList.filter(element => {
    element.name === name
  })

}


export {getTaskList, addTask}
