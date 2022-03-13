// False: false, 0, [], "", '', null, undefined, NaN
// True: true, 1, -1, 0.5, "0"

const canDrive = false;
if (canDrive) {
    console.log("She can drive!")
} else {
    console.log("She can't drive!")
}

const accountBalance = 0
if (!accountBalance) {
    console.log("Don't have account balance")
} else {
    console.log("Have some money")
}

const boolWithString = 'Hello World'
console.log('boolWithString', boolWithString)

// Force true or false
console.log('boolWithString', !!boolWithString)

// Denial
console.log('Denial', !boolWithString)

// Denial + Force + Bool
console.log(!(!!boolWithString));