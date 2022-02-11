import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./book.model";
import { LibraryService } from "./library.service";

@Controller('library')
export class LibraryController {
    constructor(private libraryService: LibraryService) { }

    @Get()
    async getAll(): Promise<Book[]> {
        return this.libraryService.getAll()
    }

    @Get(':id')
    async getBook(@Param() params): Promise<Book> {
        return this.libraryService.getBookById(params.id)
    }

    @Post()
    async createBook(@Body() book: Book) {
        this.libraryService.createBook(book)
    }

    @Put()
    async updateBook(@Body() book: Book): Promise<[number, Book[]]> {
        return this.libraryService.updateBook(book)
    }

    @Delete(':id')
    async deleteBook(@Param() params) {
        this.libraryService.deleteBook(params.id)
    }
}