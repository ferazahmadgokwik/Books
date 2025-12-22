import { BookService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    findAll(): {
        code: number;
        data: {
            id: number;
            title: string;
            author: string;
        }[];
        message: string;
    };
    create(createBookDto: CreateBookDto): {
        code: number;
        data: {
            title: string;
            author: string;
            id: number;
        };
        message: string;
    };
    findOne(id: number): {
        code: number;
        message: string;
        data: {
            id: number;
            title: string;
            author: string;
        };
    };
    updateOne(id: number, updateBook: CreateBookDto): {
        code: number;
        data: {
            id: number;
            title: string;
            author: string;
        };
        message: string;
    };
    deleteOne(id: number): {
        code: number;
        data: null;
        message: string;
    };
}
