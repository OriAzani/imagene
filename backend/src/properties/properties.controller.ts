import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto, UpdatePropertyDto } from './properties.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly service: PropertiesService) {}

  @Get('/')
  getProperties() {
    return this.service.getProperties({});
  }

  @Get(':id')
  getPropertyById(@Param('id', ParseIntPipe) id: number) {
    return this.service.getPropertyById({ id });
  }

  @Post('/')
  create(@Body() body: CreatePropertyDto) {
    return this.service.createProperty(body);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdatePropertyDto,
  ) {
    const { addressId, ...propertyFields } = body;
    const payload = {
      where: { id },
      data: {
        ...propertyFields,
        ...(addressId && { addressId }),
      },
    };

    return await this.service.updateProperty(payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.deleteProperty({ id });
  }
}
