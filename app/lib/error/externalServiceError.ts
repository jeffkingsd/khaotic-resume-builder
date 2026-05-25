import { AppError, ErrorCode } from './appError'

export class ExternalServiceError extends AppError {
  constructor(
    service: string,
    message = 'An unexpected error occurred',
    cause?: unknown,
    context?: Record<string, unknown>,
  ) {
    super({
      code: ErrorCode.EXTERNAL_SERVICE_ERROR,
      statusCode: 500,
      message,
      cause,
      context,
    })
  }
}
