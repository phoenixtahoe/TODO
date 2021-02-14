const formElm = document.querySelector('form')
const theList = document.querySelector('#Todo-list')

theList.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.tagName === "BUTTON")
    {
        event.target.parentElement.remove()
    }
    if (event.target.tagName === 'LI')
    {
        event.target.style.textDecoration = "line-through"
    }
})


formElm.addEventListener("submit", function(event) {
    event.preventDefault();
    const newText = document.querySelector('#Todo-task')
    const newBtn = document.createElement('button')
    const newTask = document.createElement('li')
    newBtn.innerText = "x"
    
    newTask.innerText = newText.value
    
    newTask.append(newBtn)
    theList.append(newTask)
    formElm.reset();
})