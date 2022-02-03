// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
//   The correct answer would be 17.

function countSheeps(arrayOfSheep) {
    let counter = 0
    arrayOfSheep.forEach(sheep => {
        if(sheep) counter++
    })
    return counter
}