import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
