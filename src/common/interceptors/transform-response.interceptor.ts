import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { map, Observable } from 'rxjs';

interface ApiSuccesResponse<T = unknown> {
  data: T;
  message?: string;
}

@Injectable()
export class TransfomInterceptor<T> implements NestInterceptor<
  ApiSuccesResponse<T>,
  any
> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<ApiSuccesResponse<T>>,
  ): Observable<ApiSuccesResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        return { code: 1, ...data };
      }),
    );
  }
}
