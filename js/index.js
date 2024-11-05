const text = document.getElementById("text-modal")
const btn = document.getElementById("btn")
const bg =  document.getElementById("bg")

const modal =  document.getElementById("modal")


text.innerText = "Должен ли я тебе за спасение?"

btn.onclick = () => {
    modal.style.display = "block"
}
bg.onclick= () => {
     modal.style.display = "none"
}





// const text = document.getElementById("textmod")
// const btn = document.getElementById("btn")
// const modal = document.getElementById("modal")
// const bg = document.getElementById("bgMod")
// const b1 = document.getElementById("btn1")
// const b2 = document.getElementById("btn2")
// text.innerText = "Должен ли я тебе за спасение?"

// btn.onclick = () => {
//     modal.style.display = "block"
// }
// bg.onclick = () => {
//     modal.style.display = "none"
// }
// const col = document.getElementById("alan")
// col.onclick = () => {
//     modal.style.display = "none"
// }
// b2.onclick = () => {
//     text.innerHTML = "Кому должен,тому и прощаю,ПОНЯЛ?!"
//     b2.onclick = () => {
//         text.innerText = "Все давай гуляй"
//         b1.style.display = "none"
//         b2.style.display = "none"
//     }
//     b1.onclick = () => {
//         text.innerText = "Ждем моих кентов тогда и решим что с тобой делать,либо избить тебя либо забрать все твои деньги и отпустить домой"
//         b1.style.display = "none"
//         b2.style.display = "none"
//     }
// }
// b1.onclick = () => {
//     text.innerHTML = "Спасибо самый добрый ШРЕК НА СВЕТЕ!!!"
//     b1.style.display = "none"
//     b2.style.display = "none"
// }













// let massive = [["Олег",24],["Милана",12],["Катя",32]]

// let filterMassive = massive.filter((element) => {
//     if(element[1] > 18)
//          return element
// })

// console.log(filterMassive)

// let mapMassive = massive.map((element) => {
//     return element[1] + 1
// })
// console.log(mapMassive)


// let reduceMassive = massive.reduce((total,element) => {
//     return total + element[1] / massive.length
// },0)

// console.log(reduceMassive)

// let sortMassive = massive.sort((a,b) => {
//    return a - b
// } )

// console.log(sortMassive)



// const one = (massive) => {
//   let min = named[0]
//   let max= named[0]
//   let sum = 0
//   let product = 0
//   let avg = 0
//   let multiplied = 0
//   for(let i = 0; i < named.length; i++) {
//     if(named[i] < min) {
//       min = named[i]
//     }
//     if(named[i] > max) {
//       max = named[i]
//     }
//     if (named[i] % 2 == 0) {
//       sum += named[i]
//     }
//     if (named[i] % 2 != 0) {
//       product *= named[i]
//     }
//     if (named[i] % 2 == 0) {
//       sum += named[i]
//       avg += named[i]
//     }
// }
// console.log(min,max,sum,product,avg )
// }
// let named = [1, 2, 3, 4, 5];

// let result = one(named)

 







// const massive = ["Minus","Plusik","Minus","Plusik","Plusik","Minus","Plusik","Plusik"]

// let a = 21

// for (let i = 0; i < massive.length; i++) {
//     if (massive[i] == "plusik") {
//       a += 1 
//     }
//  else if (massive[i] == "Minus") {
//       a -= 1
//     }
//   }

// console.log(a)




// function lastChild(mas) {
//   return mas[mas.length - 1]
// }

// const massive = [1,2,3,4,5,6,7,8,9,10,]

// console.log(lastChild(massive))





// let f = []

// let a = Number(prompt("Напишите числа для ряда Фибоначчи:"))

// f[0] = 0
// f[1] = a

// for (let i = 2; i < a; i++) {
//   f[i] = f[i - 1] + f[i - 2]
// }

// console.log("Ряд Фибоначчи:")
// console.log(f.join(", "))







// let baby = ["конфеты","каша","игрушки"]
// let father = ["диван","бритва","часы"]
// let mather = ["пубра","сумка","кольцо"]

// let list = []

// for (let i = 0; i < baby.length; i++) {
//     list.push(baby[i])
//   }
//   for (let i = 0; i < father.length; i++) {
//     list.push(father[i])
//   }
//   for (let i = 0; i < mather.length; i++) {
//     list.push(mather[i])
//   }

// console.log(list)






// let massive =prompt([]);

// let max = massive[0]
// let min = massive[0];

// for (let i = 1; i < massive.length; i++) {

//     if (massive[i] > max) {
//         max = massive[i];
//     }
//     if (massive[i] < min) {
//         min = massive[i];
//     }
// }
// console.log(max)
// console.log(min)




// let massive = [1, 2, 3, 4, 5];

// while (true) {
//     let a = prompt("Выберите действие: добавить, удалить, вывести или выйти:");
    
//     if (a == "выйти") {
//         break;
//     }
    
//     if (a == "удалить") {
//         let b = prompt("Удалить последний или первый элемент? (последний/первый):");
//         if (b == "последний") {
//             massive.pop();
//         } else if (b== "первый") {
//             massive.shift();
//         }
//     } else if (a == "добавить") {
//         let c = prompt("Добавить в начало или конец? (начало/конец):");
//         let d= prompt("Введите элемент для добавления:");
//         if (c == "начало") {
//             massive.unshift(d);
//         } else if (c == "конец") {
//             massive.push(d);
//         }
//     } else if (a == "вывести") {
//         console.log(massive.join(', '));
//     } else {
//         console.log("Попробуйте снова.");
//     }
// }