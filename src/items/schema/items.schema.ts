import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;


// Decorator schema gives to class Items properties to interact with Database
// find, dindBy etc. 
@Schema()
export class Item {
  @Prop()
  // @Prop({unique : true})
  name: string;

  @Prop()
  price : number;

  @Prop()
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);