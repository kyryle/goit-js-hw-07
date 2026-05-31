const liItemCount = document.querySelectorAll('#categories>li.item')
console.log(liItemCount.length)

const result = document.querySelectorAll('#categories>li.item').forEach((element) => {
    const h2 = element.querySelector('h2');
    console.log(h2.textContent)
    const liLength = element.querySelectorAll('ul>li')
    console.log(liLength.length)
})








