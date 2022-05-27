import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsController } from './bands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Band, BandSchema } from 'src/schemas/band.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Band.name, schema: BandSchema }])],
  controllers: [BandsController],
  providers: [BandsService],
  exports: [BandsService, MongooseModule],
})
export class BandsModule { }
