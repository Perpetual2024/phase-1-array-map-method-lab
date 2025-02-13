nums = [1,3,5,7]
target = 8
function Array(nums, target){
    let numsMap = new Map()
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if(numsMap.has(diff)){
            return [numsMap.get(diff), i]
        }
        numsMap.set(nums[i], i)
    }

    }

    console.log(Array(nums, target)) 

