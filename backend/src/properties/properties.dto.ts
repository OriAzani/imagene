import { IsString, IsInt, IsOptional, IsPositive } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  title: string;

  @IsInt()
  @IsPositive()
  number_of_rooms: number;

  @IsPositive()
  price: number;

  @IsOptional()
  @IsInt()
  floor?: number;

  @IsString()
  contact: string;

  @IsInt()
  addressId: number;
}

export class UpdatePropertyDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  number_of_rooms?: number;

  @IsOptional()
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsInt()
  floor?: number;

  @IsOptional()
  @IsString()
  contact?: string;

  @IsOptional()
  @IsInt()
  addressId?: number;
}