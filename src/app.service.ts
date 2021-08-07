import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Sample NestJS';
  }
  getNest(): number {
    return 0;
  }
}
