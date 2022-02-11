import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./book.model";

@Injectable()
export class LibraryService {
    constructor(
      @InjectModel(Book)
      private bookModel: typeof Book 
    ) { }

      async getAll(): Promise<Book[]> {
        return this.bookModel.findAll()
      }

      async getBookById(id: number): Promise<Book> {
        return this.bookModel.findByPk(id)
      }

      async createBook(book: Book) {
        this.bookModel.create(book);
      }

      async updateBook(book: Book): Promise<[number, Book[]]> {
        return this.bookModel.update(book, {
          where: {
            id: book.id
          }
        })
      }

      async deleteBook(id: number) {
        const book: Book = await this.getBookById(id)
        book.destroy();
      }

}