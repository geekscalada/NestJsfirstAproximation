import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;


// Decorator schema gives to class Users properties to interact with Database
// find, dindBy etc. 
@Schema()
export class User {
  @Prop()
  // @Prop({unique : true})
  name: string;

  @Prop({unique:true})
  email : string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);