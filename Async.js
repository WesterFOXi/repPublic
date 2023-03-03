const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}
// delay(1000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'
// function fetchTodos() {
//     return delay(2000).then(() => {
//         // fetch(url).then(response => response.json())
//         return fetch(url)
//     }).then(response => response.json())

// }

// fetchTodos().then(data => console.log(data))

//! async для асинхронных ф-ций
async function newAsyncTodos() {
    console.log('Fetch todo starder...')
    //! await выполнит промис потом перейдет на след строку
    try { //! try выполняеться если не ошлибок
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data ', data)
    } catch (e) { //! catch  выполниться когда будут ошибки
        console.error(e);
    } finally { //! выполниться не смотря ниначто
        console.log('great')
    }
}
// newAsyncTodos() 

const user = () => {
    let name = "User"
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('My is:', name)
            resolve()
        }, 2000);
    })
}  
async function fn() {
    try {
        console.log('Start...')
        await user()
        console.log('End.') 

    } catch (error) {
        console.error('error: ', error);
    }
}
// fn() 
const person = async () => {
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('great')
            resolve()
        }, 1000)
    })
    return await new Promise(resolve_1 => {
        setTimeout(() => {
            console.log('greatTwo')
            resolve_1()
        }, 1000)
    })
}
const cons = async () => {
    console.log('start..')
    await person()
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('end..')
        }, 1000);
    })
}
// cons()
 
function findMark(s) {
    let strOne = []
   s.split('').map(item => {
        if (item !== '!') {
            strOne.push(item)
        }
    })
    return strOne
}   
// console.log(findMark('hello!!'))

function reverseSeq(n) {
    if (n == 1)
        return 1
}

const fac = n => {
    let num = []
    for (n; n >= 1; n--){
        num.push(n)
    }
    return num
}

// console.log(fac(5))

function highAndLow(n) {
    let num = n.split(' ')
    let high = 0
    let low = 0
    console.log(num)
    num.map((item) => {
        if (item > high) {
            high = item
            console.log('h ' + high)
            console.log('i ' + item)
        }
    })    
    console.log(high)
}
// console.log(highAndLow('1 22 6 7 3' ))

String.prototype.isUpperCase = function () {
        return this.toUpperCase() === this.toString()
}

// let str = 'AAA'
// console.log(str.isUpperCase())

function ipAddres(ip) {
    // return ip.split('.').join('[.]')
    return ip.replaceAll('.', '[sd]')

}
// console.log(ipAddres('255.100.50.0'))

function finalOperation(operations) {
    let num = 0
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == '--X' || operations[i] == 'X--') {
            num--
        } else if (operations[i] == '++X' || operations[i] == 'X++') {
            num++
        }
    }
    return num
}
// console.log(finalOperation(["--X","X++","X++"]))

function numStones(jewels, stones) {
    let str = ''
    stones.split('').map(itemStones => {
        if (itemStones == jewels.split('')) {
            str += jewels.split('')
        }
    })
    return str
}

// console.log(numStones('aa', 'aasaQb'))

function mostWordsFind(str) {
    let word = ''
    str.map(item => {
        item.split('').map(itemTwo => {
            console.log(itemTwo)
        })
    })
    
    return word
}

// console.log(mostWordsFind(["alice and bob love leetcode","i think so too","this is great thanks very much"]))

function interpret(command) {
    return command.replaceAll('()', 'o').replaceAll('(al)', 'al')
}
// console.log(interpret("G()(al)"))

function restoreString(word, index) {
    let indexSort = index.sort((a, b) => a - b)
    let string = []
    console.log(indexSort)
    indexSort.map((item, i) => {
        string += word[item]
    })
    return string
}
// console.log(restoreString(['b', 'a'], [1,0]))

function convertTemp(c) {
    let ans = [c + 273.15, c * 1.8 + 32]
    return ans
}
// console.log(convertTemp(36.50))

function smalless(n) {
    if(n%2 ==0) return n
    else return n * 2
}
// console.log(smalless(5))
function addTwoNumber(l1, l2) {
    // return (Number(l1.join('')) + Number(l2.join(''))).toString().split('').reverse()
    return l1.join('') 
}   
// console.log(addTwoNumber([2,4,3], [5,6,4]))


function runningSum(sum) {
    let n = 0
    let arr = []
    sum.map(item => {
        n += item
        arr.push(n)
    })
    return arr
}

// console.log(runningSum([1,2,3,4,5]))


function maxWealth(acc) {
    let wealth = 0
    for (let i = 0; i < acc.length; i++){
        let count = 0
        for (let j = 0; j < acc[0].length; j++){
            count += acc[i][j]
            console.log('count = ', count , acc[0])
        }
        if(wealth < count) wealth = count
    }
    return wealth
}

// console.log(maxWealth([[10,2], [9, 9,9], [5,6]]))


function sortPeaople(name, heights) {
    let count = heights.sort((a, b) => a - b)
    let c = 0
    for (let i = 0; i < count.length; i++){
        console.log(count[i])
    }
}
// console.log(sortPeaople(['a','b', 'c'], [100, 50, 150]))


function margeTwoList(a, b) {
    let arr = [...a, ...b].sort((a,b) => a - b)
    
    return arr
}

// console.log(margeTwoList([1,2,3], [1,5,2]))


function maxMin(arr) {
    let array = arr.sort((a, b) => a - b)
    let ar =  [array[0], array.pop()]
    return ar
}

// console.log(maxMin([5, 1,5,2,10, 3]))


function powertsOfTwo(n) {
    let arr = []
    for (let i = 0; i <= n; i++){
        arr.push(Math.pow(2, i))
    }
    return arr
}

// console.log(powertsOfTwo(4))


function index(array, n) {
    return array.length > n ? Math.pow(array[n], n) : -1
}

// console.log(index([1,2,100,4,5], 3))

function litrs(time) {
    return time * .5
}

// console.log(litrs(11.8))

function validPin(pin) {
    return parseInt(pin)
}

console.log(validPin('112saf345'))
