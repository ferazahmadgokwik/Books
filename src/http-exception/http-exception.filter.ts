import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const res = exception.getResponse();
    let message = 'Error';
    if (typeof res == 'string') {
      message = res;
    } else if (typeof res == 'object' && res !== null && 'message' in res) {
      const msg = (res as { message: string | string[] }).message;
      message = Array.isArray(msg) ? msg.join(', ') : msg;
    }
    response.status(status).json({
      code: 0,
      data: null,
      message,
    });
  }
}
