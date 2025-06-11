const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((items,idx)=>{
    items.addEventListener('click',()=>{
        hideAllcontents()
        hideAllItems()

        items.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllcontents(){
    contents.forEach(content=>content.classList.remove('show'))
}

function hideAllItems(){
    listItems.forEach(item => item.classList.remove('active'))
}