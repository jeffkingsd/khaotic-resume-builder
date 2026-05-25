import { AppError, ErrorCode } from "./appError";

export class ApiError extends AppError {
    constructor(message = "Internal Server Error", statusCode: number, cause?: unknown, context?: Record<string, unknown>) {
        super({
            code: ErrorCode.INTERNAL_SERVER_ERROR,
            statusCode,
            message,
            cause,
            context,
        })
    }
}