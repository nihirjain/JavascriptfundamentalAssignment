// You are given with an array of numbers both positive and negative. Your task is to print only the positive numbers.
let arr =[1,2,-3,5,-9,-8,-7,7,10];
for(a=0;a<arr.length;a++){
    const result = arr[a];
    if(result>0){
        console.log(arr[a]);
    }
}