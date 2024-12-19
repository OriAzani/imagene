import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Address, Prisma } from '@prisma/client';

@Injectable()
export class AddressesService {
  constructor(private prisma: PrismaService) {}

  async getAddresses(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AddressWhereUniqueInput;
    where?: Prisma.AddressWhereInput;
    orderBy?: Prisma.AddressOrderByWithRelationInput;
  }): Promise<Address[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.address.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        properties: true,
      },
    });
  }

  async getAddressById(
    addressWhereUniqueInput: Prisma.AddressWhereUniqueInput,
  ): Promise<Address | null> {
    return this.prisma.address.findUnique({
      where: addressWhereUniqueInput,
      include: {
        properties: true,
      },
    });
  }

  async createAddress(data: Prisma.AddressCreateInput): Promise<Address> {
    return this.prisma.address.create({
      data,
    });
  }

  async deleteAddress(where: Prisma.AddressWhereUniqueInput): Promise<Address> {
    const propertyCount = await this.prisma.property.count({
      where: { addressId: where.id },
    });

    if (propertyCount > 0) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'cant delete address as it is linked to a property.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.prisma.address.delete({
      where,
    });
  }

  async updateAddress(params: {
    where: Prisma.AddressWhereUniqueInput;
    data: Prisma.AddressUpdateInput;
  }): Promise<Address> {
    const { where, data } = params;
    return this.prisma.address.update({
      where,
      data,
    });
  }
}
