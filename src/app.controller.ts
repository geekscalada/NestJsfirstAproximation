import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TestGetService } from './test-get/test-get.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly _testGet: TestGetService
    ) {}

  @Get('helloWorld')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('testGet')
  getUsers(): string[] {
    return this._testGet.getUserTest()
  }
}
