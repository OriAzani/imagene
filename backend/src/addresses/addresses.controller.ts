import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { Address } from '@prisma/client';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly service: AddressesService) {}

  @Get()
  async getAddresses(
    @Param('skip') skip?: number,
    @Param('take') take?: number,
    @Param('cursor') cursor?: any,
    @Param('where') where?: any,
    @Param('orderBy') orderBy?: any,
  ): Promise<Address[]> {
    return this.service.getAddresses({ skip, take, cursor, where, orderBy });
  }

  @Get(':id')
  async getAddressById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Address> {
    return this.service.getAddressById({ id });
  }

  @Post()
  async createAddress(@Body() data: any): Promise<Address> {
    return this.service.createAddress(data);
  }

  @Put(':id')
  async updateAddress(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ): Promise<Address> {
    return this.service.updateAddress({ where: { id }, data });
  }

  @Delete(':id')
  async deleteAddress(@Param('id', ParseIntPipe) id: number): Promise<Address> {
    return this.service.deleteAddress({ id });
  }
}
