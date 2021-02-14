const formElm = document.querySelector('form')
const theList = document.querySelector('#Todo-list')

const loadList = JSON.parse(localStorage.getItem("tasks")) || [];
for (let i = 0; i < loadList.length; i++)
{
    let newTask = document.createElement('li')
    let newBtn = document.createElement('button')
    newBtn.style.padding = '5px'
    newTask.innerText = loadList[i].task
    newTask.isDone = loadList[i].isDone ? true : false;
    if (newTask.isDone)
    {
        newTask.style.textDecoration = "line-through"
    }
    newTask.append(newBtn)
    theList.append(newTask)
}

theList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON")
    {
        event.target.parentElement.remove()
        localStorage.removeItem("tasks", JSON.stringify(loadList))
    }
    if (!event.target.isDone)
    {
       event.target.style.textDecoration = "line-through"
       event.target.isDone = true;
    } 
    else
    {
        event.target.style.textDecoration = "none"
        event.target.isDone = false;
    }
    for (let i = 0; i < loadList.length; i++)
    {
        if (loadList[i].task === event.target.innerText)
        {
            loadList[i].isDone = event.target.isDone;
            localStorage.setItem("tasks", JSON.stringify(loadList));
        }
    }
})

formElm.addEventListener("submit", function(event) {
    event.preventDefault();
    let newTask = document.createElement('li')
    let newBtn = document.createElement('button')
    let newText = document.querySelector('#Todo-task')

    newBtn.style.padding = '5px'
    newTask.innerText = newText.value
    newTask.isDone = false;
    theList.append(newTask)
    newTask.append(newBtn)
    formElm.reset();

    loadList.push({task: newTask.innerText, isDone: false})
    localStorage.setItem("tasks", JSON.stringify(loadList));
})