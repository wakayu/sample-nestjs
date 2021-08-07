import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nest')
  getNest(): number {
    return this.appService.getNest();
  }

  @Get('foo')
  getFoo(@Query() query: { node: string }): string {
    return query.node;
  }
}
