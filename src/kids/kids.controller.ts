import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { KidsService } from './kids.service';
import { CreateKidDto } from './dto/create-kid.dto';
import { UpdateKidDto } from './dto/update-kid.dto';

@Controller('kids')
export class KidsController {
  constructor(private readonly kidsService: KidsService) {}

  @Post()
  create(@Body() createKidDto: CreateKidDto) {
    return this.kidsService.create(createKidDto);
  }

  @Get()
  findAll() {
    return this.kidsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kidsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKidDto: UpdateKidDto) {
    return this.kidsService.update(+id, updateKidDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kidsService.remove(+id);
  }
  @Put(':id/toys/:toyId')
  putToy(@Param('id') id: string,@Param('toyId') toyId: string) {
      return this.kidsService.addToy(+id, +toyId);
  }
  @Delete(':id/toys/:toyId')
  patchToy(@Param('id') id: string,@Param('toyId') toyId: string) {
      return this.kidsService.removeToy(+id, +toyId);
  }
  
}
