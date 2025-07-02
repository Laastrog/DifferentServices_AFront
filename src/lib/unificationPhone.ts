export function unificationPhone(value: string){

    let number = value.replace(/[^0-9]/g, '')
    // .replace(/^(\d{3})(\d{1})(\d{3})(\d+)/, '($1$2) $3($4)')
    // .replace(/(^'+7')/)

// Не удаляется первый символ
    if(number.length < 1) {
        return false 
        // Прерывание
    }
// Не добавляем больше 11 символов
    if(number.length > 11) {
        return false
    }
    // 1
    if(number[0] != '7' ) {
        console.log(number)
        return false
    }

    // 2
    if(number.length == 2) {
        number = number[0] + ' (' + number[1]
    } else
  // 2 - прошлый вид
  // if(number.length >= 2  && number.length < 3) {
  //     number = number[0] + ' (' + number[1]
  // } else
    // 3
    if(number.length == 3 ) {
        number = number[0] + ' (' + number[1] + number[2]
    } else
    // 4
    if(number.length == 4) {
        number = number[0] + ' (' + number[1] + number[2] + number[3]
    } else 
    // 5
    if(number.length == 5 ) {
        number = number[0] + ' (' + number[1] + number[2] + number[3] + ') ' + number[4]
    } else
    // 6
    if(number.length == 6 ) {
        number = number[0] + ' (' + number[1] + number[2] + number[3] + ') ' + number[4] + number[5]
    } else
    // 7
    if(number.length == 7 ) {
        number = number[0] + ' (' + number[1] + number[2] + number[3] + ') ' + number[4] + number[5] + number[6]
    } else
    // 8
    if(number.length == 8 ) {
        number = number[0] + ' (' + number[1] + number[2] + number[3] + ') ' + number[4] + number[5] + number[6] + '-' + + number[7]
    }else
    // 9
    if(number.length == 9) {
        number = number[0] + ' (' + number[1] + number[2] + number[3] + ') ' + number[4] + number[5] + number[6] + '-' + number[7] + number[8]
    }else
    // 10
    if(number.length == 10) {
        number = number[0] + ' (' + number[1] + number[2] + number[3] + ') ' + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + '-' + number[9]
    } else
    // 11
    if(number.length == 11 ) {
        number = number[0] + ' (' + number[1] + number[2] + number[3] + ') ' + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + '-' + number[9] + number[10]
    } 
    // Возвращаем перелеоанную строку номера телефона
    return "+" + number 
}