import { Injectable } from '@nestjs/common';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToysService {
    db: PrismaService

    constructor(db : PrismaService) {
      this.db = db;
    }

  create(data: CreateToyDto) {
    return this.db.toys.create({
      data
    });
  }

  findAll() {
    return this.db.toys.findMany();
  }

  findOne(id: number) {
    return this.db.toys.findUnique({
      where: {id}
    });
  }

  update(id: number, data: UpdateToyDto) {
    return this.db.toys.update({
      where: {id},
      data
    });
  }

  remove(id: number) {
    return this.db.toys.delete({
      where: {id}
    });
  }
}
