import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MeilisearchService } from 'src/meilisearch/meilisearch.service';
import { Property, Prisma } from '@prisma/client';
import { CreatePropertyDto } from './properties.dto';
@Injectable()
export class PropertiesService {
  constructor(
    private prisma: PrismaService,
    private meilisearchService: MeilisearchService,
  ) {}

  async getProperties(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PropertyWhereUniqueInput;
    where?: Prisma.PropertyWhereInput;
    orderBy?: Prisma.PropertyOrderByWithRelationInput;
  }): Promise<Property[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.property.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        address: true,
      },
    });
  }

  async getPropertyById(
    userWhereUniqueInput: Prisma.PropertyWhereUniqueInput,
  ): Promise<Property | null> {
    return this.prisma.property.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async createProperty(data: CreatePropertyDto): Promise<Property> {
    const { addressId, ...propertyData } = data;

    const createdObj = this.prisma.property.create({
      data: {
        ...propertyData,
        address: {
          connect: { id: addressId },
        },
      },
    });
    const res = await this.meilisearchService.addDocuments('imagene',[createdObj]);    
    return createdObj;
  }

  async deleteProperty(
    where: Prisma.PropertyWhereUniqueInput,
  ): Promise<Property> {
    return this.prisma.property.delete({
      where,
    });
  }

  async updateProperty(params: {
    where: Prisma.PropertyWhereUniqueInput;
    data: Prisma.PropertyUpdateInput;
  }): Promise<Property> {
    const { where, data } = params;
    return this.prisma.property.update({
      data,
      where,
    });
  }
}
