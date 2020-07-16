
//DELETE BOOKS FROM LIST
const list = document.querySelector("#libraryit ul");

list.addEventListener('click', function (b) {
    if (b.target.className == 'delete') {
        var confirms = confirm("Are you sure you wanna delete?");
        if (confirms == true) {
            console.log("AGREGADO");
            const bookli = b.target.parentElement;
            list.removeChild(bookli);
        } else
            return false;

    }
});


//ADDING BOOKS TO LIST
const addBook = document.forms['form2'];

addBook.addEventListener('submit', function (s) {
    s.preventDefault();
    //input value
    const valueS = addBook.querySelector('input[type="text"]').value;
    if (valueS == "") {
        alert("Add Book Name!");
    } else {

        //create elements
        const li = document.createElement('li');
        const name = document.createElement('span');
        const deleteB = document.createElement('span');

        //add content
        deleteB.textContent = 'delete';
        name.textContent = valueS;

        //append to document
        li.appendChild(name);
        li.appendChild(deleteB);
        list.appendChild(li);

        deleteB.classList.add('delete');
        name.classList.add('BookTitle');

        const valueNull = addBook.querySelector('input[type="text"]');
        valueNull.value = "";
    }

});

//SEARCH 
const search = document.forms['searchBar'].querySelector('input');

search.addEventListener('keyup', function (s) {

    const SearchValue = s.target.value.toLowerCase();
    const mybooks = list.getElementsByTagName('li');
    //for each book
    Array.from(mybooks).forEach(function (book) {
        const firstBook = book.firstElementChild.textContent;
        if (firstBook.toLowerCase().indexOf(SearchValue) != -1) {
            book.style.display = 'block';
        } else
            book.style.display = 'none';



    })

})

var loginn = document.getElementById('modal-loginUp');
var signup = document.getElementById('modal-signUp');


function signUp() {
    if (signup.style.display == "none") {
        signup.style.display = "block";
    } else
        signup.style.display = "none";

}


function login() {
    signup.style.display = "none";
    
    if(loginn.style.display == "none"){
       loginn.style.display = "block";

    } else
        loginn.style.display = "none";
}






