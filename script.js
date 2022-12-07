let bokhylla = document.getElementById("bokhylla");

let avaliability = "";

class Book {
    constructor(title, author, pages, avaliable) {
        this.title = title,
        this.author= author,
        this.pages = pages,
        this.avaliable = (avaliable == true) ? "tillgänglig" : "utlånad";
        
    }

    // checkOut() {
        
    //     return avaliability;
    // }
   

    printBookInfo() { 
        let bookInfo = this.title + " är en bok skriven av " +  this.author + " och är " + this.pages + " sidor lång. Boken är just nu " + this.avaliable + ".";
        console.log(bookInfo);
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

let GreatLibrary = new Bibla ("GreatLibrary");
let Bibeln = new Book("Holy bible", "God", "1550", true);
let Manifestet = new Book("Manifestet", "Marx", "80", false);

GreatLibrary.addBook(Bibeln);
GreatLibrary.addBook(Manifestet);


console.log(GreatLibrary);
Bibeln.printBookInfo();
console.log(Bibeln);
Manifestet.printBookInfo();
console.log(Manifestet);

