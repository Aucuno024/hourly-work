const {Hour} = require("./hour")

class Hourly{
    /**
     * Create an Hour object
     * @param  {Hour} hourBegin   A hour witch represent the beginning of hourly.
     * @param  {Hour} hourEnd  A hour witch represent the end of hourly.
     * @return {Hourly}   Return your hourly
     */
    constructor(hourBegin, hourEnd) {
        this.begin = hourBegin
        this.end = hourEnd
    }
    getHoursBegin(){
        /**
         * Return the start time of the schedule
         * @return {Number}
         */
        return this.begin.getHours()
    }
    getHoursEnd(){
        /**
         * Return the end time of the schedule
         * @return {Number}
         */
        return this.end.getHours()
    }
    getMinutesBegin(){
        /**
         * Return minutes from schedule start time
         * @return {Number}
         */
        return this.begin.getMinutes()
    }
    getMinutesEnd(){
        /**
         * Return minutes from schedule end time
         * @return {Number}
         */
        return this.end.getMinutes()
    }
}

module.exports = {
    Hourly
}