// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]



//思路 将0移到最后位置



// function moveZeros(arr) {
//   // arr.forEach((e, index) => {
//   //   console.log(e)
//   //   if(e === 0){
//   //     arr.push(...arr.splice(index,1))
//   //   }
//   //   console.log(arr)
//   // })
//   let len = arr.length



//   for(let i=0,times=0; times<=len; i++){
//     if(arr[i] === 0){
//       arr.push(...arr.splice(i,1))
//       i--;
//     }
//     times++
//   }
//   return arr
// }

// console.log(moveZeros([4,2,4,0,0,3,0,5,1,0]))

// Array.prototype.splice