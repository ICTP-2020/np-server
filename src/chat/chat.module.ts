// https://www.joshmorony.com/creating-a-simple-live-chat-server-with-nestjs-websockets/
import { Module } from '@nestjs/common';

import { ChatGateway } from './chat.gateway';

@Module({
    providers: [ ChatGateway ]
})
export class ChatModule {}
