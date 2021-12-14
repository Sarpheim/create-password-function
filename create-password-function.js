class Password {
  constructor(code) {
    this.code = code
  }
}

let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbol = ["!", "'", "£", "^", "#", "$", "+", "½", "%", "&", "/", "{", "(", "[", "(", "[", "]",")", "}", "=", "?", "*", "-", "_", "|", "@", "<", ">", ";", ".", ":", "\"", ",", "~", "¨", "é"]
let lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numberSymbol = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "'", "£", "^", "#", "$", "+", "½", "%", "&", "/", "{", "(", "[", "(", "[", "]",")", "}", "=", "?", "*", "-", "_", "|", "@", "<", ">", ";", ".", ":", "\"", ",", "~", "¨", "é"]
let numberLowercaseLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numberUppercaseLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numberSymbolLowercaseLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "'", "£", "^", "#", "$", "+", "½", "%", "&", "/", "{", "(", "[", "(", "[", "]",")", "}", "=", "?", "*", "-", "_", "|", "@", "<", ">", ";", ".", ":", "\"", ",", "~", "¨", "é", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let numberSymbolUppercaseLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "'", "£", "^", "#", "$", "+", "½", "%", "&", "/", "{", "(", "[", "(", "[", "]",")", "}", "=", "?", "*", "-", "_", "|", "@", "<", ">", ";", ".", ":", "\"", ",", "~", "¨", "é", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numberLowercaseLetterUppercaseLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numberSymbolLowercaseLetterUppercaseLetter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "'", "£", "^", "#", "$", "+", "½", "%", "&", "/", "{", "(", "[", "(", "[", "]",")", "}", "=", "?", "*", "-", "_", "|", "@", "<", ">", ";", ".", ":", "\"", ",", "~", "¨", "é", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let symbolLowercaseLetter = ["!", "'", "£", "^", "#", "$", "+", "½", "%", "&", "/", "{", "(", "[", "(", "[", "]",")", "}", "=", "?", "*", "-", "_", "|", "@", "<", ">", ";", ".", ":", "\"", ",", "~", "¨", "é", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let symbolUppercaseLetter = ["!", "'", "£", "^", "#", "$", "+", "½", "%", "&", "/", "{", "(", "[", "(", "[", "]",")", "}", "=", "?", "*", "-", "_", "|", "@", "<", ">", ";", ".", ":", "\"", ",", "~", "¨", "é", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let symbolLowercaseLetterUppercaseLetter = ["!", "'", "£", "^", "#", "$", "+", "½", "%", "&", "/", "{", "(", "[", "(", "[", "]",")", "}", "=", "?", "*", "-", "_", "|", "@", "<", ">", ";", ".", ":", "\"", ",", "~", "¨", "é", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowercaseLetterUppercaseLetter =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numberPassword = [
  new Password(number)
]
const symbolPassword = [
  new Password(symbol)
]
const lowercaseLetterPassword = [
  new Password(lowercaseLetter)
]
const uppercaseLetterPassword = [
  new Password(uppercaseLetter)
]
const numberSymbolPassword = [
  new Password(numberSymbol)
]
const numberLowercaseLetterPassword = [
  new Password(numberLowercaseLetter)
]
const numberUppercaseLetterPassword = [
  new Password(numberUppercaseLetter)
]
const numberSymbolLowercaseLetterPassword = [
  new Password(numberSymbolLowercaseLetter)
]
const numberSymbolUppercaseLetterPassword = [
  new Password(numberSymbolUppercaseLetter)
]
const numberLowercaseLetterUppercaseLetterPassword = [
  new Password(numberLowercaseLetterUppercaseLetter)
]
const numberSymbolLowercaseLetterUppercaseLetterPassword = [
  new Password(numberSymbolLowercaseLetterUppercaseLetter)
]
const symbolLowercaseLetterPassword = [
  new Password(symbolLowercaseLetter)
]
const symbolUppercaseLetterPassword = [
  new Password(symbolUppercaseLetter)
]
const symbolLowercaseLetterUppercaseLetterPassword = [
  new Password(symbolLowercaseLetterUppercaseLetter)
]
const lowercaseLetterUppercaseLetterPassword = [
  new Password(lowercaseLetterUppercaseLetter)
]

const newNumberPassword = numberPassword[Math.floor(Math.random() * numberPassword.length)].code
const newSymbolPassword = symbolPassword[Math.floor(Math.random() * symbolPassword.length)].code
const newLowercaseLetterPassword = lowercaseLetterPassword[Math.floor(Math.random() * lowercaseLetterPassword.length)].code
const newUppercaseLetterPassword = uppercaseLetterPassword[Math.floor(Math.random() * uppercaseLetterPassword.length)].code
const newNumberSymbolPassword = numberSymbolPassword[Math.floor(Math.random() * numberSymbolPassword.length)].code
const newNumberLowercaseLetterPassword = numberLowercaseLetterPassword[Math.floor(Math.random() * numberLowercaseLetterPassword.length)].code
const newNumberUppercaseLetterPassword = numberUppercaseLetterPassword[Math.floor(Math.random() * numberUppercaseLetterPassword.length)].code
const newNumberSymbolLowercaseLetter = numberSymbolLowercaseLetterPassword[Math.floor(Math.random() * numberSymbolLowercaseLetterPassword.length)].code
const newNumberSymbolUppercaseLetter = numberSymbolUppercaseLetterPassword[Math.floor(Math.random() * numberSymbolUppercaseLetterPassword.length)].code
const newNumberLowercaseLetterUppercaseLetter = numberLowercaseLetterUppercaseLetterPassword[Math.floor(Math.random() * numberLowercaseLetterUppercaseLetterPassword.length)].code
const newNumberSymbolLowercaseLetterUppercaseLetter = numberSymbolLowercaseLetterUppercaseLetterPassword[Math.floor(Math.random() * numberSymbolLowercaseLetterUppercaseLetterPassword.length)].code
const newSymbolLowercaseLetterPassword = symbolLowercaseLetterPassword[Math.floor(Math.random() * symbolLowercaseLetterPassword.length)].code
const newSymbolUppercaseLetterPassword = symbolUppercaseLetterPassword[Math.floor(Math.random() * symbolUppercaseLetterPassword.length)].code
const newSymbolLowercaseLetterUppercaseLetter = symbolLowercaseLetterUppercaseLetterPassword[Math.floor(Math.random() * symbolLowercaseLetterUppercaseLetterPassword.length)].code
const newLowercaseLetterUppercaseLetter = lowercaseLetterUppercaseLetterPassword[Math.floor(Math.random() * lowercaseLetterUppercaseLetterPassword.length)].code

function numberPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newNumberPassword[Math.floor(Math.random() * newNumberPassword.length)]
  }
  return altyapi
}
function symbolPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newSymbolPassword[Math.floor(Math.random() * newSymbolPassword.length)]
  }
  return altyapi
}

function lowercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newLowercaseLetterPassword[Math.floor(Math.random() * newLowercaseLetterPassword.length)]
  }
  return altyapi
}
function uppercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newUppercaseLetterPassword[Math.floor(Math.random() * newUppercaseLetterPassword.length)]
  }
  return altyapi
}
function numberSymbolPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newNumberSymbolPassword[Math.floor(Math.random() * newNumberSymbolPassword.length)]
  }
  return altyapi
}
function numberLowercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newNumberLowercaseLetterPassword[Math.floor(Math.random() * newNumberLowercaseLetterPassword.length)]
  }
  return altyapi
}
function numberUppercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newNumberUppercaseLetterPassword[Math.floor(Math.random() * newNumberUppercaseLetterPassword.length)]
  }
  return altyapi
}
function numberSymbolLowercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newNumberSymbolLowercaseLetter[Math.floor(Math.random() * newNumberSymbolLowercaseLetter.length)]
  }
  return altyapi
}
function numberSymbolUppercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newNumberSymbolUppercaseLetter[Math.floor(Math.random() * newNumberSymbolUppercaseLetter.length)]
  }
  return altyapi
}
function numberLowercaseLetterUppercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newNumberLowercaseLetterUppercaseLetter[Math.floor(Math.random() * newNumberLowercaseLetterUppercaseLetter.length)]
  }
  return altyapi
}
function numberSymbolLowercaseLetterUppercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newNumberSymbolLowercaseLetterUppercaseLetter[Math.floor(Math.random() * newNumberSymbolLowercaseLetterUppercaseLetter.length)]
  }
  return altyapi
}
function symbolLowercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newSymbolLowercaseLetterPassword[Math.floor(Math.random() * newSymbolLowercaseLetterPassword.length)]
  }
  return altyapi
}
function symbolUppercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newSymbolUppercaseLetterPassword[Math.floor(Math.random() * newSymbolUppercaseLetterPassword.length)]
  }
  return altyapi
}
function symbolLowercaseLetterUppercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newSymbolLowercaseLetterUppercaseLetter[Math.floor(Math.random() * newSymbolLowercaseLetterUppercaseLetter.length)]
  }
  return altyapi
}
function lowercaseLetterUppercaseLetterPasswordCreate(length) {
  let altyapi = ""
  for (let i = 0; i < length; i++) {
    altyapi += newLowercaseLetterUppercaseLetter[Math.floor(Math.random() * newLowercaseLetterUppercaseLetter.length)]
  }
  return altyapi
}

module.exports = ({length: length, number: number, symbol: symbol, lowercaseLetter: lowercaseLetter, uppercaseLetter: uppercaseLetter}) => {
  if (!length) throw new TypeError("You need to write the length the password.")
  if (!parseInt(length)) throw new TypeError("The length the password must be a integer.")
  if (number && !symbol && !lowercaseLetter && !uppercaseLetter) {
    return numberPasswordCreate(length)
  } else if (number && symbol && !lowercaseLetter && !uppercaseLetter) {
    return numberSymbolPasswordCreate(length)
  } else if (number && !symbol && lowercaseLetter && !uppercaseLetter) {
    return numberLowercaseLetterPasswordCreate(length)
  } else if (number && !symbol && !lowercaseLetter && uppercaseLetter) {
    return numberUppercaseLetterPasswordCreate(length)
  } else if (number && symbol && lowercaseLetter && !uppercaseLetter) {
    return numberSymbolLowercaseLetterPasswordCreate(length)
  } else if (number && symbol && !lowercaseLetter && uppercaseLetter) {
    return numberSymbolUppercaseLetterPasswordCreate(length)
  } else if (number && !symbol && lowercaseLetter && uppercaseLetter) {
    return numberLowercaseLetterUppercaseLetterPasswordCreate(length)
  } else if (number && symbol && lowercaseLetter && uppercaseLetter) {
    return numberSymbolLowercaseLetterUppercaseLetterPasswordCreate(length)
  } else if (!number && symbol && !lowercaseLetter && !uppercaseLetter) {
    return symbolPasswordCreate(length)
  } else if (!number && symbol && lowercaseLetter && !uppercaseLetter) {
    return symbolLowercaseLetterPasswordCreate(length)
  } else if (!number && symbol && !lowercaseLetter && uppercaseLetter) {
    return symbolUppercaseLetterPasswordCreate(length)
  } else if (!number && symbol && lowercaseLetter && uppercaseLetter) {
    return symbolLowercaseLetterUppercaseLetterPasswordCreate(length)
  } else if (!number && !symbol && lowercaseLetter && !uppercaseLetter) {
    return lowercaseLetterPasswordCreate(length)
  } else if (!number && !symbol && lowercaseLetter && uppercaseLetter) {
    return lowercaseLetterUppercaseLetterPasswordCreate(length)
  } else if (!number && !symbol && !lowercaseLetter && uppercaseLetter) {
    return uppercaseLetterPasswordCreate(length)
  } else {
    throw new TypeError("There is no password creation configuration in the function as you configured.")
  }
}