
//  const addBtn = document.getElementsByTagName('button')[0];
const addBtn =  document.getElementById('add-btn')
 const taskName = document.getElementById('taskName');
 let grouptodo = document.getElementById("groupTodo");
//  const listed = () =>{
//     let el = `<div class="todo-list">
//         <input type="text" name="" id="task">
//         <div class="icons">
//             <i class="fa-sharp fa-solid fa-pen" style="color: black;"></i>
//             <i class="fa-sharp fa-solid fa-check" style="color: green;"></i>
//             <i class="fa-sharp fa-solid fa-trash" style="color: red;"></i>
//         </div>
// </div>`;
//     let el_section = document.createElement("div");
//     let inp = document.getElementById("taskNer").value;
//     el_section.innerHTML = el;
//     grouptodo.appendChild(el_section);
//     el_section.getElementsByTagName("input")[0].value = inp
//  }
//  button.addEventListener('click', listed)
const ognoo = document.getElementsByTagName('span')[0];
const yearDay = () =>{
     day = new Date().getDay();
     month = new Date().getMonth();
     year = new Date().getFullYear();

     ognoo.textContent = `${year}-${month}-${day}`
}
setInterval(yearDay);
const ustgah = (e) => {
    alert("Ta ustgahdaa itgeltei bna uu?");
    const parent = e.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode;
    parent.removeChild(child)
}

const cardItem = (text) =>{ 
    const item = 
    `<div class="todo-list">
            <input type="text" name="" id="task" readonly value="${text}">
            <div class="icons">
                <button class="edit" onclick = "editTask(this)" >  <i class="fa-sharp fa-solid fa-pen" style="color: black;"></i> </button>                
                <button class="check" onclick = "checkBox(this)"  ><i class="fa-sharp fa-solid fa-check" style="color: green;"></i></button>
                <button class="delete" onclick = "ustgah(this)" ><i class="fa-sharp fa-solid fa-trash" style="color: red;"></i></button>
            </div>
    </div>`;
    return item;
}
const taskAdd = () => {
    let text = taskName.value;
    if(text === ""){
        alert("Ta utga oruulaagui baina");
    }else{
        grouptodo.innerHTML += cardItem(text);
    }
}
addBtn.addEventListener("click",taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
});
 
//checked
const checkBox =(e) =>{
    // console.log(e.parentNode.parentNode.getElementsByTagName("input")[0].value);
    let inp = e.parentNode.parentNode.getElementsByTagName("input")[0];
    // console.log(e.children)
    console.log(inp.classList.contains("line"));
    if(inp.classList.contains("line")){
        inp.classList.remove("line");
        // e.children[0].classList.toggle('fa-check')
    }
    else {
        inp.classList.add("line");
        // e.children[0].style.backgroundColor = 'green'
    }
};
//edit
const editTask = (e) =>{
    // console.log(e.children[0].classList[2])
    let inpEdit = e.parentNode.parentNode.children[0];
    // console.log(inpEdit)
    if(inpEdit.hasAttribute('readonly')){
        inpEdit.removeAttribute('readonly')
        e.children[0].classList.toggle('fa-save');
    }else{
            inpEdit.setAttribute('readonly','readonly');
}
}
// const editTask = (e) =>{ 
//         // console.log();  

//         let input = e.parentNode.parentNode.children[0];
//         e.children[0].classList.toggle("fa-pen");
//         e.children[0].classList.toggle("fa-save");


//         if(input.hasAttribute("readonly")){
//             input.removeAttribute('readonly');
//         }else {
//             input.setAttribute('readonly','readonly');
//         }
// }