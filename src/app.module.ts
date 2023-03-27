import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    // MongooseModule.forRootAsync({
    //   useFactory: () => ({
    //     uri: process.env.MONGO_DB_URL_STAGING,
    //     useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true
    //   }),
    // }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: process.env.SECRET, signOptions: { expiresIn: '1d' } })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
