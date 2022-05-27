import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { Concert, ConcertDocument } from 'src/schemas/concert.schema';

@Injectable()
export class ConcertsService {
  constructor(@InjectModel(Concert.name) private concertModel: Model<ConcertDocument>,) { }

  async create(createConcertDto: CreateConcertDto): Promise<Concert> {
    return new this.concertModel(createConcertDto).save();
  }

  async findAll() {
    return this.concertModel.find()
  }

  async findOne(id: string) {
    return this.concertModel.findOne({ _id: id });
  }

  async update(id: string, updateConcertDto: UpdateConcertDto) {
    return this.concertModel.updateOne({ _id: id }, { $set: { ...updateConcertDto } })
  }

  async remove(id: string) {
    return this.concertModel.deleteOne({ _id: id });
  }
}
