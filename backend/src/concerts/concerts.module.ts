import { Module } from '@nestjs/common';
import { ConcertsService } from './concerts.service';
import { ConcertsController } from './concerts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Concert, ConcertSchema } from 'src/schemas/concert.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Concert.name, schema: ConcertSchema }])],
  controllers: [ConcertsController],
  providers: [ConcertsService],
  exports: [ConcertsService, MongooseModule]
})
export class ConcertsModule { }
