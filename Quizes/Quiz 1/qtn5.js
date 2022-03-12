function uniqueAlphabets(arr) {
    var uniqueAlphabet = new Set()
    for (var i = 0; i < arr.length; i++){
        subarr = arr[i].split(",")
        for (var j = 0; j < subarr.length; j++){
            uniqueAlphabet.add(subarr[j])
        }
    }
    console.log(...uniqueAlphabet)
}

var arr = ['a', 'b', 'c', 'd,e,f', 'a,b,c']
uniqueAlphabets(arr)

// OUTPUT:
// a b c d e f
