function moveZeros(arr,val) {
  let len = arr.length
  for(let i=0,times=0; times<=len; i++){
    if(arr[i] === val){
      arr.splice(i,1)
      i--;
    }
    times++
  }
  return arr.length
}

console.log(moveZeros([0,1,2,2,3,0,4,2], 2))