import { Controller, Get } from '@nestjs/common';
import { OrdersService }   from './orders.service';
@Controller()
export class OrdersController {
  constructor(private readonly svc: OrdersService) {}
  @Get() hello() { return this.svc.getHello(); }
}
