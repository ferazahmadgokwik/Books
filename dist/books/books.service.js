"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
let BookService = class BookService {
    books = [
        { id: 1, title: 'Book one', author: 'Author One' },
        { id: 2, title: 'Book two', author: 'Author two' },
    ];
    create(createBookDto) {
        const id = this.books.length + 1;
        const book = { id, ...createBookDto };
        this.books.push(book);
        return {
            code: 1,
            data: book,
            message: 'succes',
        };
    }
    findAll() {
        return {
            code: 1,
            data: this.books,
            message: 'success',
        };
    }
    findOne(id) {
        const book = this.books.find((b) => b.id == id);
        if (!id || !book) {
            throw new common_1.NotFoundException('Not Found');
        }
        return {
            code: 1,
            message: 'success',
            data: book,
        };
    }
    updateOne(id, updateBookDto) {
        const book = this.books.find((b) => b.id == id);
        if (!id || !book) {
            throw new common_1.NotFoundException('Not Found');
        }
        book.author = updateBookDto.author;
        book.title = updateBookDto.title;
        return {
            code: 1,
            data: book,
            message: 'success',
        };
    }
    deleteOne(id) {
        const book = this.books.find((b) => b.id == id);
        if (!id || !book) {
            throw new common_1.NotFoundException('Not Found');
        }
        this.books = this.books.filter((b) => b.id != id);
        return {
            code: 1,
            data: null,
            message: 'deleted successfully',
        };
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
//# sourceMappingURL=books.service.js.map