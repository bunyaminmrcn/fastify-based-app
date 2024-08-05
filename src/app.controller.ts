import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { RouteConfig, RouteConstraints } from '@nestjs/platform-fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @RouteConfig({ output: 'hello world' })
  @Get()
  index(@Req() req) {
    return req.routeConfig.output;
  }


  /*
  @RouteConstraints({ version: '1.2.x' })
  newFeature() {
    return 'This works only for version >= 1.2.x';
  }
  */
 
}
