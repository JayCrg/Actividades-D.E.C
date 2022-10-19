class BookList{
    
    constructor() {
        this.read = 0;
        this.notread = 0;
        this.lastRead;
        this.reading;
        this.nextRead;
        this.books = [];
      }

      add(book){
        this.books.push(book);
        if(book.isRead == false)
        this.notread += 1;
        else this.read += 1;
        this.ordenar();
      }

      finishCurrentBook(){
        this.reading.markAsRead();
        this.reading.setReadDate(new Date(Date.now()));
        this.lastRead = this.reading;
        this.reading = this.nextRead
        if (this.nextRead != undefined){
                this.ordenar()
                if(this.books[0].isRead != true){
                    this.nextRead = this.books[0];
                    this.read += 1;
                    this.notread -= 1;
                }
                else
                this.nextRead = undefined;
            }
        }

        ordenar(){
          this.books.sort((a, b)=> {
              if(a.isRead == true && b.isRead == false)
                  return -1;
              else if(a.isRead == false && b.isRead == true)
                  return 1;
              else return 0
          })
        }
}
      

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.genre
        this.isRead = false
        this.readDate
    }

    markAsRead(){
        this.isRead = true;
    }

    setReadDate(date){
        this.readDate = date
    }
    
    setgenre(genre){
        this.genre = genre
    }
}