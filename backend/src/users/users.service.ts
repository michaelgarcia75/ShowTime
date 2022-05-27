import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';
import { Concert, ConcertDocument } from 'src/schemas/concert.schema';
import { Band, BandDocument } from 'src/schemas/band.schema';


@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, @InjectModel(Concert.name) private concertModel: Model<ConcertDocument>, @InjectModel(Band.name) private bandModel: Model<BandDocument>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return new this.userModel(createUserDto).save();
  }

  async findAll() {
    return this.userModel.find()
  }

  async findOne(id: string) {
    return this.userModel.findOne({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id: id }, { $set: { ...updateUserDto } })
  }

  async remove(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }

  //auth
  async findOneAuth(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email: email })
  }

  async addBooking(userId: string, concertId: string) {
    this.concertModel.findByIdAndUpdate(concertId, { $push: { bookings: userId } }, { new: true, useFindAndModify: false });
    return this.userModel.findByIdAndUpdate(userId, { $push: { bookings: concertId } }, { new: true, useFindAndModify: false });
  }

  async addToWishlist(userId: string, concertId: string) {
    return this.userModel.findByIdAndUpdate(userId, { $push: { wishlist: concertId } }, { new: true, useFindAndModify: false });
  }

  async addFavouriteBand(userId: string, bandId: string) {
    this.bandModel.findByIdAndUpdate(bandId, { $push: { fans: userId } }, { new: true, useFindAndModify: false });
    return this.userModel.findByIdAndUpdate(userId, { $push: { bands: bandId } }, { new: true, useFindAndModify: false });
  }
}
