import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('list') 
  belajarRouting(){
    return 'belajarRouting hello';
  }

  @Post('create')
  create(){
    return 'belajar routing dengan method POST'
  }
  @Post('helo')
  helo(){
    return 'hehe'
  }

}
