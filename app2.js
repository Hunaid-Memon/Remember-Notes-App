
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    console.log('click')
    let addTitle = document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value="";
    addTxt.value="";
    console.log(notesObj)
    showNotes();
});

//add notes in click button 
function showNotes(){
    let notes = localStorage.getItem('notes');
    if (notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    let html = '';
   notesObj.forEach((element,index) => {
       html +=` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">${element.title}</h5>
           <p class="card-text"> ${element.text}</p>
           <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
       </div>
   </div> `
   });
   let notesElms = document.getElementById('notes');
   if(html.length != 0){
       notesElms.innerHTML = html;
   }else{
       notesElms.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
   }
}

//delete notes

function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        
        let cardHd = element.getElementsByTagName("h5")[0].innerText;
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal) || cardHd.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})


// let search = document.getElementById('searchTxt');
// search.addEventListener('input', function (){

//     let inputVal = search.value.toLowerCase();
//     // console.log(inputVal)
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = document.getElementsByTagName("p")[0].innerText;   //MISTAKE LINE 
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }else{
//             element.style.display = "none";
//         }
//         console.log(cardTxt)
//     })

// })