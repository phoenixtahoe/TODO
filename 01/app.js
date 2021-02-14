const formElm = document.querySelector('form')
const theList = document.querySelector('#Todo-list')

const loadList = JSON.parse(localStorage.getItem("tasks")) || [];
for (let i = 0; i < loadList.length; i++)
{
    let newTask = document.createElement('li')
    newTask.innerText = loadList[i].task
    newTask.isDone = loadList[i].isDone ? true : false;
    if (newTask.isDone)
    {
        newTask.style.textDecoration = "line-through"
    }
    theList.append(newTask)
}

theList.addEventListener("click", function(event) {
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
    let newText = document.querySelector('#Todo-task')

    newTask.innerText = newText.value
    newTask.isDone = false;
    theList.append(newTask)
    formElm.reset();

    loadList.push({task: newTask.innerText, isDone: false})
    localStorage.setItem("tasks", JSON.stringify(loadList));
})