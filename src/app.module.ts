import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestGetService } from './test-get/test-get.service';
import { CoursesModule } from './courses/courses.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CoursesModule, 
    MongooseModule.forRoot(
      'mongodb://admin:p4ssw0rd@192.168.33.22:27017', {
        dbName: 'nest'
      }
  ),
    ItemsModule,
    AuthModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService, TestGetService],
})
export class AppModule {}

// mongodb://admin:p4ssw0rd@192.168.33.22:27017/



