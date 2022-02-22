
    let myLibrary = [
        {
            title: "It Ends With Us",
            author: "Colleen Hoover",
            pages: 257,
            readIt: false,
            ISBN: "1471156265",
        },
        {
            title: "Reminders of Him",
            author: "Colleen Hoover",
            pages: 423,
            readIt: true,
            ISBN: "1542025605",
        },
        {
            title: "The Seven Husbands of Evelyn Hugo",
            author: "Taylor Jenkins Reid",
            pages: 244,
            readIt: true,
            ISBN: "176110294X",
        },
        {
            title: "Again, Rachel",
            author: "Marian Keyes",
            pages: 324,
            readIt: true,
            ISBN: "0241441137",
        },
        {
            title: "Lifespan",
            author: "Dr David A. Sinclair",
            pages: 591,
            readIt: true,
            ISBN: "B07VN5Q1Y7",
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            pages: 12024,
            readIt: true,
            ISBN: "B07J1LQDWD",
        },
                
    ];

    const hasBeenReadText = "Completed";
    const hasNotBeenReadText = "Mark as read";


    function book(title, author, pages, readIt) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readIt = readIt;
    }

    function addBookToLibrary(title, author, pages, ISBN, readIt) {
        let book = {
            "title": title,
            "author": author,
            "pages": pages,
            "ISBN": ISBN,
            "readIt": readIt,
            }
            myLibrary.push(book);
    }

    function ISBNIndexPosition(ISBN) {
        return IndexPosition = myLibrary.map(function(e) {return e.ISBN; }).indexOf(ISBN);
    }

    function removeBookFromLibrary(ISBN, bookName){
        if (confirm(`Delete '${bookName}' from library?`) == true ) {  
            if (ISBNIndexPosition(ISBN) != -1) {
                myLibrary.splice(IndexPosition, 1);
                return true;
            } 
        }
    }

    
    

    

    /* Display the library within the browser on initial load */
   
    const list = document.querySelector('.list');
   

    for (i=0; i < myLibrary.length; i++) {
        createLibraryTableRow(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].ISBN, myLibrary[i].readIt);
        }


        function createLibraryTableRow(title, author, pages, ISBN, readIt) {
            newListItemDiv = document.createElement(`div`);
            newListItemDiv.classList.toggle(`listItemCard`);
            list.appendChild(newListItemDiv);
    
            newItemTitle = document.createElement(`p`);
            newItemTitle.classList.toggle(`itemTitle`);
            newItemTitle.textContent = title;
            
            newItemAuthor = document.createElement(`p`);
            newItemAuthor.classList.toggle(`itemAuthor`);
            newItemAuthor.textContent = `by: ${author}`;
            
            newItemPages = document.createElement(`p`);
            newItemPages.classList.toggle(`itemPages`);
            newItemPages.textContent = `(${pages} pages)`;

            newItemISBN = document.createElement(`p`);
            newItemISBN.classList.toggle(`itemISBN`);
            newItemISBN.textContent = ISBN;
            newItemISBN.style.display = "none";
            
            newItemCardSectionOne = document.createElement(`div`);

            newItemCardSectionOne = document.createElement(`div`);
            newItemCardSectionOne.classList.toggle(`CardSectionOne`);

            newItemReadItWrapper = document.createElement(`div`);
            newItemReadItWrapper.setAttribute("data-isbn", ISBN); 
            newItemReadItWrapper.setAttribute("id", "itemReadItWrapper"); 
            newItemReadItWrapper.classList.toggle(`itemReadItWrapper`);
            
            newItemReadIt = document.createElement(`input`);
            newItemReadIt.classList.toggle(`itemReadIt`);
            newItemReadIt.setAttribute("type", "image");

            newItemReadItText = document.createElement(`div`);
            newItemReadItText.setAttribute("data-isbn", ISBN);
            newItemReadItText.classList.toggle("itemReadItText");

            
    
            if (readIt == true) {
                newItemReadIt.setAttribute("src", "images/toggle-right.svg");
                newItemReadIt.setAttribute("alt", "This book is marked as read.  Click this button to mark as not read.");
                newItemReadIt.setAttribute("data-isbn", ISBN); 
                newItemReadItText.textContent = hasBeenReadText;
            } else {
                newItemReadIt.setAttribute("src", "images/toggle-left.svg");
                newItemReadIt.setAttribute("alt", "This book is marked as not read.  Click this button to mark as read.");
                newItemReadIt.setAttribute("data-isbn", ISBN); 
                newItemReadItText.textContent = hasNotBeenReadText;
            }
            
            newDeleteMeWrapper = document.createElement(`div`);
            newDeleteMeWrapper.setAttribute("data-isbn", ISBN);
            newDeleteMeWrapper.setAttribute("data-title", title);
            newDeleteMeWrapper.setAttribute("id", "deleteThisBookWrapper"); 
            newDeleteMeWrapper.classList.toggle(`deleteThisBookWrapper`);

            newDeleteMe = document.createElement(`input`);
            newDeleteMe.classList.toggle(`deleteThisBook`);
            newDeleteMe.setAttribute("type", "image");
            newDeleteMe.setAttribute("src", "images/delete-bin.svg");
            newDeleteMe.setAttribute("alt", "Delete this book from your library");
            newDeleteMe.setAttribute("data-isbn", ISBN);

            newDeleteMeText = document.createElement(`div`);
            newDeleteMeText.classList.toggle("deleteThisBookText");
            newDeleteMeText.textContent = "Delete Book";
            
            newItemCardSectionTwo = document.createElement(`div`);
            newItemCardSectionTwo.classList.toggle(`CardSectionTwo`);
            
            newListItemDiv.appendChild(newItemCardSectionOne);
            newItemCardSectionOne.appendChild(newItemTitle);
            newItemCardSectionOne.appendChild(newItemAuthor);
            newItemCardSectionOne.appendChild(newItemPages);
            newItemCardSectionOne.appendChild(newItemISBN);
            newListItemDiv.appendChild(newItemCardSectionTwo);
            newItemCardSectionTwo.appendChild(newItemReadItWrapper);
            newItemReadItWrapper.appendChild(newItemReadIt);
            newItemReadItWrapper.appendChild(newItemReadItText);
            newItemCardSectionTwo.appendChild(newDeleteMeWrapper);
            newDeleteMeWrapper.appendChild(newDeleteMe);
            newDeleteMeWrapper.appendChild(newDeleteMeText);
            
            // add the listeners for animations and actions:
            newListItemDiv.addEventListener('mouseenter', function(e) {
                e.target.classList.add('listItemCardMouseEnter');
            });
            newListItemDiv.addEventListener('mouseleave', function(e) {
                e.target.classList.remove('listItemCardMouseEnter');
            });
        
            newItemReadItWrapper.addEventListener('mouseenter', function(e) {
                e.target.classList.add('itemReadItWrapperMouseAnim');
            });
            newItemReadItWrapper.addEventListener('mouseleave', function(e) {
                e.target.classList.remove('itemReadItWrapperMouseAnim');
             })

            newItemReadItWrapper.addEventListener('click', updateReadBookStatusActions);

            newDeleteMeWrapper.addEventListener('mouseenter', function(e) {
                e.target.classList.add('deleteThisBookWrapperAnim');
            });
            newDeleteMeWrapper.addEventListener('mouseleave', function(e) {
                e.target.classList.remove('deleteThisBookWrapperAnim');
             })

             newDeleteMeWrapper.addEventListener('click', completeDeletionSteps);
            

        }

       




addBookFormContainer = document.querySelector(".formContainer");

addNewBookToLibrary = document.querySelectorAll('.addNewBookToLibrary');

addNewBookToLibrary.forEach(e => e.addEventListener('click', function(e) {
    addBookFormContainer.classList.add('formContainerVisible');
    addBookFormContainer.addEventListener('transitionend', function(e) {
        document.getElementById("bookTitle").focus();
    }); 
    
}));



closeNewBookFormModal = document.querySelector('.closeNewBookFormModal');
closeNewBookFormModal.addEventListener('click', closeFormModal);

function closeFormModal() {
    addBookFormContainer.classList.remove('formContainerVisible');
}

const addBookForm = document.querySelector(".addBookForm");
function handleForm(event) { event.preventDefault(); } 
addBookForm.addEventListener('submit', handleForm);

addNewBookToLibrarySubmitButton = document.querySelector(".addBooktoLibrarySubmitButton");
addNewBookToLibrarySubmitButton.addEventListener('click', function(e) {
 
    const bookTitle = document.getElementById("bookTitle").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const bookPages = document.getElementById("bookPages").value;
    const bookISBN = document.getElementById("bookISBN").value;

    if (bookTitle == "" || bookAuthor == "" || bookPages == "" || bookISBN == "" ) {
         return;
    } else {
        let readIt = false;
        addBookToLibrary(bookTitle, bookAuthor, bookPages, bookISBN, readIt);
        createLibraryTableRow(bookTitle, bookAuthor, bookPages, bookISBN, readIt);
        closeFormModal()
            
        
    }


});






function completeDeletionSteps(e) {
    if(e.target.id == 'deleteThisBookWrapper') {
        let ISBN = e.target.dataset.isbn;
        let title = e.target.dataset.title;
        let listNode = e.target.parentNode.parentNode;
            if (removeBookFromLibrary(ISBN, title) == true) {
                removeListNodeActions(listNode);
            }
    } else {
        let ISBN = e.target.parentNode.dataset.isbn;
        let title = e.target.parentNode.dataset.title;
        let listNode = e.target.parentNode.parentNode.parentNode;
        if (removeBookFromLibrary(ISBN, title) == true) {
            removeListNodeActions(listNode);
        }
    }
    
    function removeListNodeActions(listNode) {
        listNode.classList.add('listItemCardRemovalAnimations');
        listNode.addEventListener('transitionend', function(e) {
            // potential for infinite loop here if child is not removed within it
            while (listNode.firstChild) {
                listNode.removeChild(listNode.firstChild);
            }
        listNode.remove();
        });  
        }
    }


    function updateReadBookStatusActions(e) {

        if(e.target.id == 'itemReadItWrapper') {
            let ISBN = e.target.dataset.isbn;
            let imageNode = e.target.firstChild;
            let textNode = e.target.lastChild;
            updateReadStatusToggle(imageNode, textNode, ISBN);
        } else {
            let ISBN = e.target.parentNode.dataset.isbn;
            let imageNode = e.target.parentNode.firstChild;
            let textNode = e.target.parentNode.lastChild;
            updateReadStatusToggle(imageNode, textNode, ISBN);
        }
    }

    function updateReadStatusToggle(imageNode, textNode, ISBN) {
        let IndexPosition = ISBNIndexPosition(ISBN);
        myLibrary[IndexPosition].readIt = !myLibrary[IndexPosition].readIt;
        
        if (myLibrary[IndexPosition].readIt == true) {
            imageNode.setAttribute("src", "images/toggle-right.svg");
            textNode.textContent = hasBeenReadText;
    
        } else {
            imageNode.setAttribute("src", "images/toggle-left.svg");
            textNode.textContent = hasNotBeenReadText;
        }
    }


