import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { FundingEventConsumer } from './funding-event.consumer';
import { FundingEventProducer } from './funding-event.producer';
import { MongooseModule } from '@nestjs/mongoose';
import { Song, SongSchema } from '../songs/schemas/song.schema';
import { Singer, SingerSchema } from '../songs/schemas/singer.schema';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: Song.name, schema: SongSchema },
        { name: Singer.name, schema: SingerSchema },
      ],
      'song',
    ),
    BullModule.registerQueue({
      name: 'QUEUE_RECENT_FUNDING_EVENT',
    }),
  ],
  providers: [FundingEventConsumer, FundingEventProducer],
  controllers: [],
  exports: [FundingEventProducer],
})
export class QueueModule {}
