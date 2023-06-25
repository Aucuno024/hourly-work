/**
 *
 * @param {Date} date
 * @return {Boolean}
 */
function isFrenchBankHolidays(date){
    /*
        paques, lundiPaques, ascension, pentecote and lundiPentecote are not functionnal.
     */
    const G = date.getFullYear() % 19;
    const C = Math.floor(date.getFullYear()/100)
    const H = (C - Math.floor(C/4) - Math.floor((8*C+13)/25) + 19*G + 15)%30
    const I = H - Math.floor(H / 28) * (1 - Math.floor(H / 28) * Math.floor(29 / (H + 1)) * Math.floor((21 - G) / 11));
    const J = (date.getFullYear() + Math.floor(date.getFullYear() / 4) + I + 2 - C + Math.floor(C / 4)) % 7;
    const L = I - J;
    const moisPaques = 3 + Math.floor((L + 40) / 44);
    const JourPaques = L + 28 - 31 * Math.floor(moisPaques / 4);
    const paques = new Date(date.getFullYear(), moisPaques - 1, JourPaques);
    const lundiPaques = new Date(date.getFullYear(), moisPaques - 1, JourPaques + 1);
    const ascension = new Date(date.getFullYear(), moisPaques - 1, JourPaques + 39);
    const pentecote = new Date(date.getFullYear(), moisPaques - 1, JourPaques + 49);
    const lundiPentecote = new Date(date.getFullYear(), moisPaques - 1, JourPaques + 50);
    if(date.getDate() === 25 && date.getMonth() === 11){
        return true
    } else if(date.getDate() === 11 && date.getMonth() === 10){
        return true
    } else if(date.getDate() === 1 && date.getMonth() === 0){
        return true
    } else if(date.getDate() === 1 && date.getMonth() === 4){
        return true
    } else if(date.getDate() === 8 && date.getMonth() === 4){
        return true
    } else if(date.getDate() === 14 && date.getMonth() === 6){
        return true
    } else if(date.getDate() === 15 && date.getMonth() === 7){
        return true
    } else if(date.getDate() === 1 && date.getMonth() === 10){
        return true
    } else if(date.toDateString() === paques.toString()){
        return true
    } else if(date.toDateString() === lundiPaques.toString()){
        return true
    } else if(date.toDateString() === ascension.toString()){
        return true
    } else if(date.toDateString() === pentecote.toDateString()){
        return true
    } else if(date.toDateString() === lundiPentecote.toDateString()){
        return true
    }
    return false
}

/**
 *
 * @param {Date} date
 * @param {String}country
 * @return {Boolean|boolean}
 */
function  isBankHolidays(date, country){
    switch (country){
        case "France":
            return isFrenchBankHolidays(date)
    }
    return false
}

module.exports = {
    isBankHolidays
}