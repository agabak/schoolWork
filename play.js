const message = ["Hello", "What  going", "Hey there"]

const working = (arr) => {
     return  arr.map(mess => {
        return mess + "That wahat";
    });
}

console.log(working(message));