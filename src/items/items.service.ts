import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item, ItemDocument } from './schema/items.schema';

@Injectable()
export class ItemsService {

  constructor (@InjectModel(Item.name) private itemModel : Model<ItemDocument>) {

  }   

  async create(createItemDto: CreateItemDto) {
    const createdItem = await this.itemModel.create(createItemDto)
    return `This action adds a new item, reference ${createdItem}`;
  }

  async findAll() {
    const list = await this.itemModel.find({});
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
