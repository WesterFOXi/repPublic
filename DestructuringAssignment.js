function calcValue(a, b) {
    return [
        a+b, a-b
    ]
}

let [sum, sub] = calcValue(5, 2)
// console.log(sum)

const info = {
    posrch: '911',
    BMW: 'V18',
    address: {
        country: 'Ukraine',
        sity: 'Kyiv'
    },
    name: 'Vlad',
    age: 20
}

let { posrch: myCar, BMW, Audi = 'cool', address: {sity, country}} = info
console.log(myCar, Audi, sity, country)

function infoPerson({name, age}) {
    console.log(name + ' ' + age)
}
// infoPerson(info)

function interval() {
    let count = 0
    let starts = []
    let i = 0
    let time = setInterval(() => {
        console.log(starts);
        if (count == 5) {
            returnTime()
            clearInterval(time)
        }
        count++
        starts.push(i++)
    }, 100);
    function returnTime() {
        let overTime = setInterval(() => {
            if (count == 0) clearInterval(overTime)
            count--
            console.log(starts)
            starts.pop()
        }, 100)
    }
}
// setTimeout(() => {
//     setInterval(() => {
//         interval()
//     }, 1500);
// }, 0)



let person = {
    name: 'Vlad',
    age: 20,
    address: {
        sity: 'Kyiv',
        street: 'Solomynca',
        country: {
            othen: {
                main: () => {
                    return ['Ukraine']
                }
            }
        }
    },
    main: ['House', 'Car']
}
console.log(person)
let { address: { street , sity: s}, main:  [one, two]} = person

function info2({ address: { country: { othen: { main } } } } = {}) {
    return main()
}
console.log(info2(person))

let user = {
    name: 'Vlad',
    years: 20
}

let { name, years: age, isAdmin = false } = user
// console.log(isAdmin)

let salaries = {
    'John': 100,
    'Pette': 300,
    'Mary': 250
}
function topSalary(salaries) {
    let a = Object.entries(salaries)
    let max = 0
    let maxName = null
    for ([name, price] of a) {
        if (max < price) {
            max = price
            maxName = name
        }   
    }
    return maxName
}       
const str = word => word.toString().toLowerCase() === word.toString().toLowerCase().split('').reverse().join('')
console.log(str(1331))
const pal = n => n === 1 ? 1 : n * pal(n - 1)
const arr = new Array(10).fill(null).map(() => Math.floor(Math.random() * 10))
console.log(arr)

const multy = (arr, n) => {
    return arr.map(item => item * n)          
}
      
Array.prototype.multyArr = function () {    
    return this.map(item => item * Math.floor(Math.random() * 3) + 1)    
}
let arr2 =  new Array(10).fill(null).map(() => 1)   
console.log(arr2.multyArr())

let arrName = ['Vlad', 'Dima', 'Sasha']
Array.prototype.arrNameProt = function () {
    let newArrName = new Array(1).fill(null).map(() => arrName[0])
    return newArrName
}
console.log(arrName.arrNameProt())

