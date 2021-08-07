import { Controller, Get } from '@nestjs/common';
import { MemoService } from './memo.service';

@Controller('memo')
export class MemoController {
  constructor(private readonly memoService: MemoService) {}
  @Get()
  getHello(): string {
    return this.memoService.getNest();
  }
}
