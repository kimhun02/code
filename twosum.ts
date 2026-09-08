function twoSum(nums: number[], target: number): number[] {
    let serealnum:number[] = []

    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length;j++){
     if(Number(nums[i]) + Number(nums[j]) === Number(target)){
        return serealnum = [i, j]
        }  
    }
}
    return serealnum
        
}
console.log(twoSum([2,7,11,15], 18))