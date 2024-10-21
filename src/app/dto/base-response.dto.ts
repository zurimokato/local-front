import { PageResponse } from "./page-respnse.dto";

export interface BaseResponse<T> {

    message: string;           // Equivalente a String message
    code: string;              // Equivalente a String code
    data: T;                   // Object data (usamos un tipo genérico para permitir cualquier tipo)
    httpStatus: HttpStatus;    // Equivalente a HttpStatus httpStatus (usamos un enum)
    pageResponse?: PageResponse; // Información sobre la paginación, opcional

}

export enum HttpStatus {
    OK = "OK",
    BAD_REQUEST = "Bad Request",
    UNAUTHORIZED = "Unauthorized",
    FORBIDDEN = "Forbidden",
    NOT_FOUND = "Not Found",
    INTERNAL_SERVER_ERROR = "Internal Server Error",
    // Agrega otros códigos según sea necesario
}