import { Module } from '@nestjs/common';
import { EmployeeModule } from './modules/employee/employee.module';
import { CustomerModule } from './modules/customer/customer.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { OrderModule } from './modules/order/order.module';
import { ServiceModule } from './modules/service/service.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { XizmatlarModule } from './modules/xizmatlar/xizmatlar.module';
import { XizmatlaModule } from './modules/xizmatla/xizmatla.module';

@Module({
  imports: [EmployeeModule, CustomerModule, VehicleModule, OrderModule, ServiceModule, InventoryModule, XizmatlarModule, XizmatlaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
