export default class Task{
  constructor(name, date = '-', status = false, priority = 'low'){
    this.name = name
    this.date = date
    this.status = status
    this.priority = priority
  }

  setName(name){
    this.name = name
  }
  getName(){
    return this.name
  }

  setDate(date){
    this.date = date
  }

  getDate(date){
    return this.date
  }

  setStatus(status){
    this.status = status
  }

  getStatus(){
    return this.status
  }

  setPriority(priority){
    this.priority = priority
  }

  getPriority(){
    return this.priority
  }
}
