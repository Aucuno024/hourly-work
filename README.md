# Hourly Work!
A work schedule management package.

## How it works ?

All you need to do is import the necessary
```javascript
const {hourlyWork, Hour, Hourly} = require("hourly-work")
```
Then create your schedule with start and end times.
```javascript
let beginMorning = new Hour(8, 0)
let endMorning = new Hour(12, 0)
let beginEvening = new Hour(13, 0)
let endEvening = new Hour(19, 0)
let morning = new Hourly(beginMorning, endMorning)
let evening = new Hourly(beginEvening, endEvening)
```
Finally, add a start date and an end date to call hourlyWork. 
```javascript
let begin = new Date(2023, 9, 7, 11, 52)
let end = new Date(2023, 9, 10, 22 , 53)
let workTime = hourlyWork(begin, end, morning, evening, "USA")
```
The first two parameters represent the timetable search limits, the next two the timetables and the last, the country 
chosen to take holidays into account.