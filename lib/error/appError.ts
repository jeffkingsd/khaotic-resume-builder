export enum ErrorCode {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  EXTERNAL_SERVICE_ERROR = 'EXTERNAL_SERVICE_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  BAD_REQUEST = 'BAD_REQUEST',
}

export interface AppErrorOptions {
  code: ErrorCode
  statusCode: number
  message: string
  context?: Record<string, unknown>
  cause?: unknown
  shouldLog?: boolean
}

export abstract class AppError extends Error {
  readonly code: ErrorCode
  readonly statusCode: number
  readonly context?: Record<string, unknown>
  readonly cause?: unknown
  readonly shouldLog?: boolean
  readonly timestamp: string

  constructor(options: AppErrorOptions) {
    super(options.message)
    Object.setPrototypeOf(this, new.target.prototype)

    this.name = this.constructor.name
    this.code = options.code
    this.statusCode = options.statusCode
    this.context = options.context
    this.cause = options.cause
    this.shouldLog = options.shouldLog
    this.timestamp = new Date().toISOString()
  }

  toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      code: this.code,
      statusCode: this.statusCode,
      message: this.message,
      context: this.context,
      timestamp: this.timestamp,
    }
  }
}
