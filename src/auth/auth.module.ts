import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { UserSchema } from 'src/users/schema/users.schema';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstant } from './jwt.constant';
import { JwtAuthGuard } from './auth.guard';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      }
    ]),    
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ]
})
export class AuthModule {}
