const inputArea = document.querySelector(".to-do__input-area");
const inputText = document.getElementById("toDoInput");
const button = document.querySelector(".button-purpple");
const toDoWrapper = document.querySelector(".add-itens");

const selectAllArea = document.querySelector(".select-all__area");
const allDone = document.querySelector(".all-done")
const removeAll = document.querySelector(".remove-all")


//DRAG AND DROP


button.addEventListener("click", function(event){
    event.preventDefault();

    //VALIDAÇÃO DO CAMPO DE TEXTO

    if(inputText.value === "" || inputText.value === null || inputText.value === " " || inputText.value === undefined){
        inputText.focus();
        return false;
    }
    


    const toDoBox = document.createElement("div");
    toDoBox.classList.add("to-do__box-inside")
    toDoBox.style.backgroundColor = "#fff";
    toDoBox.style.display = "flex";
    toDoBox.style.justifyContent = "space-between";
    toDoBox.style.padding = "0px 10px";
    toDoBox.setAttribute("id", "drop1")
    toDoBox.setAttribute("draggable", "true")

    let dragged

    toDoBox.addEventListener("dragstart", function(event){
        dragged = event.target
        console.log(dragged)

    })

    toDoBox.addEventListener("dragend", function(event1){
        console.log(event1.target)
        dropItem = event.target

        if ( event.target.className == "dropzone" ) {
            event.target.style.background = "";
            dropItem.parentNode.removeChild( dropItem );
            dropItem.target.appendChild( dragged );

    }
    
    

    // toDoBox.setAttribute("dropble", "true")

    const toDoItem = document.createElement("p");
    toDoItem.classList.add("to-do__box-text")
    toDoItem.innerHTML = inputText.value;

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "x"
    deleteButton.classList.add("button")


    // const atributesBox = toDoBox.getAttributeNode("class", "backgroundColor", "display","justifyContent", "padding", "id", "draggable", "ondragstart" ).value
    // const atributesP = toDoItem.getAttributeNode("class")
    // const toDoBoxDrag = `${atributesBox}${atributesP}${toDoItem.innerHTML}`
    // console.log(toDoBoxDrag)
    
    toDoBox.appendChild(toDoItem);
    toDoBox.appendChild(deleteButton);
    toDoWrapper.appendChild(toDoBox);


//DELATAR ITEM 
    deleteButton.addEventListener("click", function(event2){
        event2.preventDefault()
        toDoBox.remove()
    
    })


    toDoBox.addEventListener("click", function(evento3){

        if (toDoItem.classList.contains("to-do__box-text")){
            toDoItem.classList.remove("to-do__box-text");
            toDoItem.classList.add("to-do__box-text_checked");
        }else if (toDoItem.classList.contains("to-do__box-text_checked")) {
            toDoItem.classList.remove("to-do__box-text_checked");
            toDoItem.classList.add("to-do__box-text");
        }
    
});

//CLICAR EM TODOS OS ITENS 
    allDone.addEventListener("click", function(e){


            if (toDoItem.classList.contains("to-do__box-text")){
                toDoItem.classList.remove("to-do__box-text");
                toDoItem.classList.add("to-do__box-text_checked");
            }else if (toDoItem.classList.contains("to-do__box-text_checked")) {
                toDoItem.classList.remove("to-do__box-text_checked");
                toDoItem.classList.add("to-do__box-text");
            }

    });

// DELETAR TODOS OS ITENS

    removeAll.addEventListener("click", function(event1){
        event1.preventDefault()
    
        toDoBox.remove()
    })

    inputText.value = ""
})




// class App {

//     static init() {
  
//       App.box = document.getElementsByClassName('box')[0]
  
//       App.box.addEventListener("dragstart", App.dragstart)
//       App.box.addEventListener("dragend", App.dragend)
  
//       const containers = document.getElementsByClassName('holder')
  
//       for(const container of containers) {
//         container.addEventListener("dragover", App.dragover)
//         container.addEventListener("dragenter", App.dragenter)
//         container.addEventListener("dragleave", App.dragleave)
//         container.addEventListener("drop", App.drop)
//       }
//     }
  
//     static dragstart() {
//       this.className += " held"
    
//       setTimeout(()=>this.className="invisible", 0)
//     }

//     static dragend() {
//         this.className = "box"
//       }
    
//       static dragover(e) {
//         e.preventDefault()
//       }
    
//       static dragenter(e) {
//         e.preventDefault()
//         this.className += " hovered"
//       }
    
//       static dragleave() {
//         this.className = "holder"
//       }
    
//       static drop() {
//         this.className = "holder"
//         this.append(App.box)
//       }
    
//     }
    
//     document.addEventListener("DOMContentLoaded", App.init)