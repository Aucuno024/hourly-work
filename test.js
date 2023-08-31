const {hourlyWork} = require("./hourlyWork")
const {Hour} = require("./hour");
const {Hourly} = require("./hourly");
let begin = new Date(2023, 9, 7, 11, 52)
let end = new Date(2023, 9, 10, 22 , 53)
let beginMorning = new Hour(8, 0)
let endMorning = new Hour(12, 0)
let morning = new Hourly(beginMorning, endMorning)
let beginEvening = new Hour(13, 0)
let endEvening = new Hour(19, 0)
let evening = new Hourly(beginEvening, endEvening)
let workTime = hourlyWork(begin, end, morning, evening, "USA")
console.log(workTime)