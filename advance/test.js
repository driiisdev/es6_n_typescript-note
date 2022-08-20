function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;
    // console.log(max_num);
    for (let num of nums){
        if (num>max_num) {
            max_num = num;
            // console.log(max_num);
        }
    }
    return console.log(max_num)
}

find_max([2,5,7,1,4]);