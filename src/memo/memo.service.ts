import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoService {
  getNest(): string {
    return 'memo';
  }
}
