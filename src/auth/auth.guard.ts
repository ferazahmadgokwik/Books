import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const authorization = req.headers['authorization'];
    if (!authorization || !authorization.startsWith('Bearer')) {
      throw new UnauthorizedException('unauthorize');
    }
    if (
      !authorization.split(' ')[1] ||
      authorization.split(' ')[1].trim().length == 0
    ) {
      throw new UnauthorizedException('unauthorize');
    }

    return true;
  }
}
