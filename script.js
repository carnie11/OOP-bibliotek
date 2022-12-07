let bokhylla = document.getElementById("bokhylla");
let lana = document.getElementById("lana");
let lämnaTillbaka = document.getElementById("lämnaTillbaka");
let lanaBtn = document.getElementById("lanaBtn");
let lämnaBtn = document.getElementById("lämnaBtn");



let avaliability = "";



class Book {
    constructor(title, author, pages, avaliable) {
        this.title = title,
        this.author= author,
        this.pages = pages,
        this.avaliable = (avaliable == true) ? "tillgänglig" : "utlånad";
        
    }


    returnBook() {  //= LÄMNA TILLBAKA

    }

    printBookInfo() { 
        let bookInfo = this.title + " är en bok skriven av " +  this.author + " och är " + this.pages + " sidor lång. Boken är just nu " + this.avaliable + ".";
       
        bokhylla.insertAdjacentHTML("afterbegin", "<li>" + bookInfo +  "<input type= 'checkbox'></input></li>" );
        
    }

    borrowBook() {
        this.avaliable = "utlånad";
        this.printBookInfo();
        printAllBooks();

    }

}



class Bibla {
    constructor(name) {
        this.name,
        this.books = []
    }

    addBook(newBook){
        this.books.push(newBook);
       
        
    }
}



function printAllBooks() {
    bokhylla.innerHTML= "";
    console.log(GreatLibrary);
    Bibeln.printBookInfo();
    console.log(Bibeln);
    Manifestet.printBookInfo();
    console.log(Manifestet);
};

lanaBtn.addEventListener("click", function() { //= LÅNA
    for (let i = 0; i < GreatLibrary.books.length; i++) {
        if (lana.value ==  GreatLibrary.books[i].title) {
            console.log("Du har lånat " +lana.value + ".");
            GreatLibrary.books[i].borrowBook();
            console.log(GreatLibrary.books[i]);

            break;

        } else {
            console.log("Vi har inte titeln i biblan");
            break;
        }
        
    }
    
});

let GreatLibrary = new Bibla ("GreatLibrary");
let Bibeln = new Book("Holy bible", "God", "1550", true);
let Manifestet = new Book("Manifestet", "Marx", "80", false);

GreatLibrary.addBook(Bibeln);
GreatLibrary.addBook(Manifestet);


printAllBooks();
