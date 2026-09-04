function isPalindrome(x: number): boolean {
    let num:number = 0
    for (let i = x; i > 0; i = Math.floor(i / 10)) {
        num = num * 10 + (i % 10)
    }
return num === x
};
console.log(isPalindrome(20))