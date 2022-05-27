import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BandsModule } from './bands/bands.module';
import { ConcertsModule } from './concerts/concerts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://fdizes:vMPSvsv0rNz4wTp0@cluster0.9oo8u.mongodb.net/showtime',
      { w: 'majority', retryWrites: true },
    ),
    BandsModule,
    ConcertsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
