// You are given with an array of numbers and strings. Your task is to find the first string in the array. On finding the first string print “Found the First String” and its value.
const arr =[1,2,999,56,"mithun",1234,"PW"]
for(a=0;a<arr.length;a++){
    let find = arr[a];
    if(typeof arr[a] === "string"){
        console.log("find the first string" ,arr[a])
        break;
    }
}

    