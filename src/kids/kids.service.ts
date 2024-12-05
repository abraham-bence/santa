import { Injectable } from '@nestjs/common';
import { CreateKidDto } from './dto/create-kid.dto';
import { UpdateKidDto } from './dto/update-kid.dto';
import { PrismaService } from 'src/prisma.service';
import { Toy } from 'src/toys/entities/toy.entity';

@Injectable()
export class KidsService {
  db: PrismaService;
 
  constructor(db: PrismaService) {
    this.db = db;
  }

  create(data: CreateKidDto) {
    return this.db.kids.create({
      data
    });
  }

  findAll() {
    return this.db.kids.findMany();
  }

  findOne(id: number) {
    return this.db.kids.findUnique({
      where: {id}
    });
  }

  update(id: number, data: UpdateKidDto) {
    return this.db.kids.update({
      where: {id},
      data
    });
  }

  addToy(id: number, toyId: number) {
    return this.db.kids.update({
      where: {id},
      data: {
        toys : {
          connect : [
            {id: toyId}
          ]
        }
      },
      include: {
        toys: {}
      }
    })
  }

  removeToy(id: number, toyId: number) {
    return this.db.kids.update({
      where: {id},
      data: {
        toys: {
          disconnect: [
            {id : toyId}
          ]
        }
      }
    })
  }

  remove(id: number) {
    return this.db.kids.delete({
      where: {id}
    });
  }
}
