let dtObj = [{
    nums: [3,2,1,0,4],
    numsOfJumps: 4,
    currentIndex: 0,
    jumps: 1,
}];

let finalObj = JSON.parse(JSON.stringify(dtObj[dtObj.length - 1]));
finalObj.nums[finalObj.currentIndex] = finalObj.nums[finalObj.currentIndex] - finalObj.jumps;
finalObj.currentIndex += finalObj.jumps;
finalObj.numsOfJumps -= finalObj.jumps;

// Make some checks if we can reach the last index and proceed with code

dtObj.push(finalObj);
