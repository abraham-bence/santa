import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KidsModule } from './kids/kids.module';
import { ToysModule } from './toys/toys.module';

@Module({
  imports: [KidsModule, ToysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
