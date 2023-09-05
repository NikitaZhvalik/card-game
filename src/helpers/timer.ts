// // // Поля таймера
// // const timerSecond = document.querySelector('.next-page__second')
// // const timerMinute = document.querySelector('.next-page__minute')
// // let second :number = 0
// // let minute :number = 0
// // //TODO что здесь за тип данных? 
// // let interval :any

// function startTimer({timerSecond, timerMinute, second, minute, interval}) {
//     goTimer({timerSecond, timerMinute, second, minute})
//     clearInterval(interval)
//     interval = setInterval(goTimer, 1000)
// }

// function stopTimer(interval) {
//     clearInterval(interval)
// }

// function goTimer({timerSecond, timerMinute, second, minute}) {
//     second++
//     if (second <= 9) {
//         if (timerSecond) timerSecond.textContent = "0" + second
//     }
//     if (second > 9) {
//         if (timerSecond) timerSecond.textContent = String(second)
//     }
//     if (second > 59) {
//         minute++
//         if (minute < 9) {
//             if (timerMinute) timerMinute.textContent = "0" + minute + "."
//             second = 0
//         }
//         if (minute === 3) {
//             alert('Вы проиграли!')
//         }
//     }
// }

// export {startTimer, stopTimer, goTimer}