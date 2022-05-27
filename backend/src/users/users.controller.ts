import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Patch(':id/booking')
  addBooking(@Param('id') userId: string, @Body() data: any) {
    return this.usersService.addBooking(userId, data.concertId);
  }

  @Patch(':id/wishlist')
  addToWishlist(@Param('id') userId: string, @Body() data: any) {
    return this.usersService.addToWishlist(userId, data.concertId);
  }

  @Patch(':id/favourite')
  addFavouriteBand(@Param('id') userId: string, @Body() data: any) {
    return this.usersService.addFavouriteBand(userId, data.bandId);
  }

}
