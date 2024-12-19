import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Controllers
import { AddressesController } from './addresses/addresses.controller';
import { PropertiesController } from './properties/properties.controller';

// Services
import { AddressesService } from './addresses/addresses.service';
import { PropertiesService } from './properties/properties.service';
import { PrismaService } from './prisma/prisma.service';
import { MeilisearchService } from './meilisearch/meilisearch.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AddressesController, PropertiesController],
  providers: [
    AddressesService,
    PropertiesService,
    PrismaService,
    MeilisearchService,
  ],
})
export class AppModule {}
