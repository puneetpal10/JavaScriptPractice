const array = [3, 4, 5, 6];
const target = 9


function findTargetVale(nums, target) {// O(n^2)

    console.log(nums, target);
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            // if (nums[i] ==  target - nums[j]) {
            //     return [i, j]
            // }
            if (target == nums[i] + nums[j]) {
                return [i, j]
            }
        }
        return [2]
    }
}

// console.log(findTargetVale(array,target));


const twoSum = (nums, target) => {// O(n^2)

    let storage = {};
    for (let [index, num] of nums.entries()) {

        if(storage[num] !== undefined){
            return [storage[num], index]
        }
        storage[target - num] = index;
    }
}

console.log(twoSum(array, target));
