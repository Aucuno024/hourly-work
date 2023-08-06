/**
 *
 * @param {Date} currentDate
 * @param {Date} easter
 * @param {Date} easterMonday
 * @return {Boolean}
 */
function isFrenchBankHolidays(currentDate, easter, easterMonday){

    let ascension = new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() + 39);
    let pentecost = new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() + 49);
    let pentecostMonday= new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() + 50);

    console.log(currentDate.toDateString(), ascension.toDateString())
    if(currentDate.getDate() === 25 && currentDate.getMonth() === 11){
        return true
    } else if(currentDate.getDate() === 11 && currentDate.getMonth() === 10){
        return true
    } else if(currentDate.getDate() === 1 && currentDate.getMonth() === 0){
        return true
    } else if(currentDate.getDate() === 1 && currentDate.getMonth() === 4){
        return true
    } else if(currentDate.getDate() === 8 && currentDate.getMonth() === 4){
        return true
    } else if(currentDate.getDate() === 14 && currentDate.getMonth() === 6){
        return true
    } else if(currentDate.getDate() === 15 && currentDate.getMonth() === 7){
        return true
    } else if(currentDate.getDate() === 1 && currentDate.getMonth() === 10){
        return true
    } else if(currentDate.toDateString() === easter.toDateString()){
        console.log("test")
        return true
    } else if(currentDate.toDateString() === easterMonday.toDateString()){
        console.log("test")
        return true
    } else if(currentDate.toDateString() === ascension.toDateString()){
        return true
    } else if(currentDate.toDateString() === pentecost.toDateString()){
        return true
    } else if(currentDate.toDateString() === pentecostMonday.toDateString()){
        return true
    }
    return false
}


/**
 *
 * @param {Date} currentDate
 * @param {Date} easter
 * @param {Date} easterMonday
 * @return {Boolean}
 */
function isUSABankHolidays(currentDate, easter, easterMonday){
    let colombDay;
    console.log(currentDate.toDateString())
    if (currentDate.getMonth() === 9) {
        colombDay = new Date(currentDate);
        colombDay.setDate(1)
        let monday = 0
        while (monday < 2) {
            if (colombDay.getDay() === 1) {
                monday++
            }
            if (monday < 2) {
                colombDay.setDate(colombDay.getDate() + 1)
            }
        }
    }
    else{
        colombDay = new Date(currentDate);
        colombDay.setDate(currentDate.getDate() - 1)
    }
    console.log(colombDay.toDateString(), currentDate.toDateString())
    if(currentDate.getDate() === 25 && currentDate.getMonth() === 11){
        return true
    } else if (currentDate.getDate() === 1 && currentDate.getMonth() === 0) {
        return true
    } else if (currentDate.getDate() === 21 && currentDate.getMonth() === 0) {
        return true
    }else if (currentDate.getDate() === 3 && currentDate.getMonth() === 1) {
        return true
    } else if (currentDate.toDateString() === easter.toDateString()){
        return true
    } else if (currentDate.toDateString() === easterMonday.toDateString()){
        return true
    } else if (currentDate.getDate() === 27 && currentDate.getMonth() === 6){
        return true
    } else if (currentDate.getDate() === 4 && currentDate.getMonth() === 7){
        return true
    } else if (currentDate.getDate() === 2 && currentDate.getMonth() === 8){
        return true
    } else if (currentDate.toDateString() === colombDay.toDateString()){
        return true
    } else if(currentDate.getDate() === 8 && currentDate.getMonth() === 10){
        return true
    }else if(currentDate.getDate() === 11 && currentDate.getMonth() === 10){
        return true
    }
}


/**
 *
 * @param {Date} currentDate
 * @param {String}country
 * @return {Boolean|boolean}
 */
function  isBankHolidays(currentDate, country){
    let a = currentDate.getFullYear() % 19
    let b = Math.floor((currentDate.getFullYear() / 100))
    let c = currentDate.getFullYear() % 100
    let d = Math.floor((b / 4))
    let e = b % 4
    let f = Math.floor((( b + 8) / 25))
    let g = Math.floor(((b - f + 1) / 3))
    let h =  ((19 * a) + b - d - g + 15) % 30
    let i = Math.floor((c / 4))
    let k = c % 4
    let l = (32 + (2 * e) + (2 * i) - h - k) % 7
    let m = Math.floor(((a + (11 * h ) + (22 * l)) / 451))
    let month = Math.floor(((h + l - (7 * m) + (114)) / 31))
    let day = 1 + (( h + l - (7 * m) + (114)) % 31)
    let easter = new Date(currentDate.getFullYear(), month - 1, day);
    let easterMonday = new Date(easter.getFullYear(), easter.getMonth(), easter.getDate() + 1);
    switch (country){
        case "France":
            return isFrenchBankHolidays(currentDate, easter, easterMonday)
        case "USA":
            return isUSABankHolidays(currentDate, easter, easterMonday)
    }

    return false
}

module.exports = {
    isBankHolidays
}