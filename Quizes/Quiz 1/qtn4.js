var myarr = ['a', 'b', 'c', 'd']
console.log('Original array = ' + myarr)

myarr.push('e')
console.log('after adding e at the end = ' + myarr)

myarr.unshift('z')
console.log('after adding z at the start = ' + myarr)

// OUTPUT:
// Original array = a,b,c,d
// after adding 'e' at the end = a,b,c,d,e
// after adding 'z' at the start = z,a,b,c,d,e
