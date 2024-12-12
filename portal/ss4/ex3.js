function maxSubArraySum(arr) {
    if (arr.length === 0) return { maxSum: 0, subArray: [] };
    let maxSum = arr[0];  
    let currentSum = arr[0]; 
    let start = 0; 
    let end = 0; 
    let tempStart = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] > arr[i]) {
            currentSum += arr[i];
        } else {
            currentSum = arr[i];
            tempStart = i; 
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart; 
            end = i; 
        }
    }

    let subArray = arr.slice(start, end + 1);

    return { maxSum, subArray };
}

let arr = [-1,2,3,5,-6,4,2,9];
let result = maxSubArraySum(arr);
console.log("Tổng lớn nhất:", result.maxSum);  
console.log("Dãy con tạo thành tổng lớn nhất:", result.subArray); 
