var minimumAbsDifference = function(arr) {
    let result = []
    //从小到大排序
    arr.sort((a,b)=>a-b)
    //初始化最小绝对差
    let lastCha = arr[arr.length-1]-arr[0]
    //构建最小绝对差结果数组
    for(let i =0;i<arr.length-1;i++){
        if(arr[i+1]-arr[i] === lastCha){
            result.push([arr[i],arr[i+1]])
        }
        else if(arr[i+1]-arr[i] < lastCha){
            result = []
            result.push([arr[i],arr[i+1]])
            lastCha = arr[i+1]-arr[i]
        }
    }
    return result
};
