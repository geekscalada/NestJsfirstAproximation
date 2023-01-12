import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth-dto/login-auth-dto'; 
import { RegisterAuthDto } from './dto/register-auth-dto/register-auth-dto';
import { hash, compare } from 'bcrypt'
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/users/schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>) {

  }

  async register(userObject: RegisterAuthDto) {
    const {password} =  userObject;
    const passHashed = await hash(password, 10) //salt
    
    // TODO: generate salt randomly for ejample:
    // let mySalt = generateSalt(8);
    // await hash(password, mySalt)

    userObject = {...userObject, password:passHashed};

    return this.userModel.create(userObject);    
    
  }

  async login(userObjectLogin: LoginAuthDto) {
    
    const {email, password} = userObjectLogin

    // Sugar sintax email: email on the .findOne
    const findUser = await this.userModel.findOne({email})
    
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404)
    
    const checkPassword = await compare(password, findUser.password)

    if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

    const data = findUser;

    return data;
  }
}
