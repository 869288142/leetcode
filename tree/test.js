function convert (data) {
    let hashMap = {}
    let map = []
    for(let i = 0; i < data.length; i++) {
        let curItem  = data[i]

        if(hashMap[curItem.province]) {
            map[hashMap[curItem.province]].citys.push({
                province: curItem.province, 
                code: curItem.code
            })
        }else {
            hashMap[curItem.province] = map[map.length]
            map.push({ 
                province: curItem.province, 
                citys: [
                    {
                        province: curItem.province, 
                        code: curItem.code
                    }
                ] 
            })
        }
    }
    return map
}