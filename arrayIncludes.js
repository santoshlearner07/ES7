// Array.includes(value)
// Array.includes(value,start_index)

let marks = [50,85,45,65,45,78];

// //usefull for single element 

// if(marks.includes(85)){
//     console.log("Element Present")
// } else {
//     console.log("Element Abesnt")
// }

// // Not usefull fo multi[le element

// if(marks.includes(85,45)){
//     console.log("Element Present")
// } else {
//     console.log("Element Abesnt")
// }

let student1 = { name : 'Karan' }
let student2 = { name : 'Jadav'}
let users = [student1,student2]
console.log(users.includes(student2))
console.log(users.includes(student3))