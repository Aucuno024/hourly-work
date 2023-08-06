class Hour{
    /**
     * Create an Hour object
     * @param  {Number} hours   A integer witch represent the hours.
     * @param  {number} minutes   A integer witch represent the minutes.
     * @return {Hour}   Return your hours.
     */
    constructor(hours, minutes) {
        minutes = Math.round(minutes)
        hours = Math.round(hours)
        console.assert(hours < 24 && hours >=0)
        console.assert(minutes >=0 && minutes <60)
        this.hours = hours
        this.minutes = minutes
    }
    getHours(){
        /**
         * get hours.
         * @return {Number} return hours of Hour object.
         */
        return this.hours
    }
    getMinutes(){
        /**
         * get minutes
         * @return {Number} return minutes of Hour object
         */
        return this.minutes
    }
}

module.exports = {
    Hour
}
