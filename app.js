// var button  = document.querySelector('button')
// var input = document.querySelector('input')
// var list = document.querySelector('ul')
// var body =document.querySelector('body')
// var button = document.querySelector('button')


// const callbackFunction = () => {
//     const inputvalue = input.value
// const element = document.createElement('li')
// const textNode = document.createTextNode(inputvalue)
// element.appendChild(textNode)
// list.appendChild(element)
// }
// button.addEventListener('click',callbackFunction)
 
const table = document.querySelector('table')
console.log(table)

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    console.log(data)
    data.forEach(user => {
        let row = document.createElement('tr')
        let element = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.username}</td>`
       row.innerHTML= element
       table.appendChild(row)
 })
})