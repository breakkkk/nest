import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { ApiResponse } from './api.response';
import { Observable, map } from 'rxjs';

export class TransformInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<ApiResponse<T>> | Promise<Observable<ApiResponse<T>>> {
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();
        const code = response.statusCode;
        return new ApiResponse<T>(data, code);
      }),
    );
  }
}
