import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBandDto } from './dto/create-band.dto';
import { UpdateBandDto } from './dto/update-band.dto';
import { Band, BandDocument } from 'src/schemas/band.schema';


@Injectable()
export class BandsService {
  constructor(@InjectModel(Band.name) private bandModel: Model<BandDocument>,) { }

  async create(createBandDto: CreateBandDto): Promise<Band> {
    return new this.bandModel(createBandDto).save();
  }

  async findAll() {
    return this.bandModel.find()
  }

  async findOne(id: string) {
    return this.bandModel.findOne({ _id: id });
  }

  async update(id: string, updateBandDto: UpdateBandDto) {
    return this.bandModel.updateOne({ _id: id }, { $set: { ...updateBandDto } })
  }

  async remove(id: string) {
    return this.bandModel.deleteOne({ _id: id });
  }
}
