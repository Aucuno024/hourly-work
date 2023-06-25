const {Hourly} = require("./hourly")
const {Hour} = require("./hour")
const {isBankHolidays} = require("./bankHolidays")

/**
 * Obtains working hours between two dates.
 * @param {Date} beginDate interval start date.
 * @param {Date} endDate interval end date.
 * @param {Hourly} hourlyMorning morning hourly.
 * @param {Hourly} hourlyAfternoon afternoon hourly.
 * @param {String} country country for bank holidays.
 * @param {Boolean} includeWeekEnd weekend included or not, defaulted to false.
 * @return {Array<String>} list of work time between the date, weekend not included.
 */
function hourlyWork(beginDate, endDate, hourlyMorning, hourlyAfternoon, country, includeWeekEnd= false){

    let workTime = []
    let currentDate = beginDate

    if(currentDate < new Date(currentDate).setHours(hourlyMorning.getHoursBegin(), hourlyMorning.getMinutesBegin())){
        currentDate.setHours(hourlyMorning.getHoursBegin(), hourlyMorning.getMinutesBegin())
    }
    if(currentDate.getHours() >new Date(currentDate).setHours(hourlyMorning.getHoursEnd(), hourlyMorning.getMinutesEnd())
        && new Date(currentDate).setHours(hourlyAfternoon.getHoursBegin(), hourlyAfternoon.getMinutesBegin())){
        currentDate.setHours(hourlyAfternoon.getHoursBegin(), hourlyAfternoon.getMinutesBegin())
    }
    if(endDate > new Date(endDate).setHours(hourlyAfternoon.getHoursEnd(), hourlyAfternoon.getMinutesEnd())){
        endDate.setHours(hourlyAfternoon.getHoursEnd(), hourlyAfternoon.getMinutesEnd())
    }

    for (currentDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate()+1)) {

        if(((currentDate.getDay() !== 6 && currentDate.getDay() !== 0) || includeWeekEnd) && !isBankHolidays(currentDate, country)){
            let workDay = []
            if (currentDate.toDateString() === endDate.toDateString() &&
                endDate < new Date(currentDate).setHours(hourlyMorning.getHoursEnd(), hourlyMorning.getMinutesEnd())
                && endDate.getTime() > currentDate.getTime()){

                let end = new Date(currentDate)
                end.setHours(endDate.getHours(), endDate.getMinutes(), 0, 0)
                workDay.push(currentDate.toString(), end.toString())
                currentDate.setHours(hourlyAfternoon.getHoursBegin(), hourlyAfternoon.getMinutesBegin())
            }
            else if(currentDate < new Date(currentDate).setHours(hourlyMorning.getHoursEnd(), hourlyMorning.getMinutesEnd())){
                let end = new Date(currentDate)
                end.setHours(hourlyMorning.getHoursEnd(), hourlyMorning.getMinutesEnd())
                workDay.push(currentDate.toString(),  end.toString())
                currentDate.setHours(hourlyAfternoon.getHoursBegin(), hourlyAfternoon.getMinutesBegin())
            }

            if(currentDate.toDateString() === endDate.toDateString() &&
                endDate < new Date(endDate).setHours(hourlyAfternoon.getHoursEnd(), hourlyAfternoon.getMinutesEnd())
                && endDate.getTime() > currentDate.getTime()){
                let end = new Date(currentDate)
                end.setHours(endDate.getHours(), endDate.getMinutes(), 0, 0)
                workDay.push(currentDate.toString(), end.toString())
            }
            else if(endDate.getTime() > currentDate.getTime()){
                let end = new Date(currentDate)
                end.setHours(19, 0)
                workDay.push(currentDate.toString(), end.toString())
            }
            workTime.push(workDay)
        }
        currentDate.setHours(8)
    }
    return workTime
}
let begin = new Date(2023, 3, 5, 11, 52)
let end = new Date(2023, 3, 12, 22 , 53)
let one = new Hour(8, 0)
let two = new Hour(12, 0)
let morning = new Hourly(one, two)
let three = new Hour(13, 0)
let four = new Hour(19, 0)
let evening = new Hourly(three, four)
let workTime = hourlyWork(begin, end, morning, evening, "France")
console.log(workTime)

