/*
 * URL: https://leetcode.com/problems/jump-game/description/
 */

var canJump = function(nums) {
    
    let subArrays = [];

    if(nums.length == 1 && nums[0] == 0) return true;
    if(nums.length > 1 && nums[0] == 0)  return false;

    while(nums.includes(0)) {
        let indexOfZero = nums.indexOf(0);
        let tmpNums = nums.slice(0, indexOfZero + 1);
        nums = nums.slice(indexOfZero + 1);
        if(tmpNums.length > 1) {
            subArrays.push(tmpNums);
        }
        else {
            subArrays[subArrays.length - 1].push(tmpNums[0]);
        }
    }

    if(subArrays.length == 0)
        return true;

    function canJumpFn(subArr, lastSubArray) {
        for(let i = 0; subArr[i] > 0; i++) {
            let currentElem = subArr[i];
            if(lastSubArray && currentElem >= subArr.length - 1 - i)
                return true;
            else if(!lastSubArray && currentElem > subArr.length - 1 - i)
                return true;
        }
    
        return false;
    }
    
    for(var i = 0; i < subArrays.length; i++) {
        if(!canJumpFn(subArrays[i], (i == subArrays.length - 1 && nums.length == 0))) {
            if(subArrays.length == 1 || i == 0)
                return false;
            else {
                let tmpSubArray = subArrays.splice(i, 1);
                subArrays[i - 1] = subArrays[i - 1].concat(...tmpSubArray);
                i -= 2;
            }
        }
    }    
    
    return true;
};
