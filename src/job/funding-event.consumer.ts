import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { FundingEventProducer } from './funding-event.producer';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song, SongDocument } from '../songs/schemas/song.schema';
import { Singer, SingerDocument } from '../songs/schemas/singer.schema';

@Processor('QUEUE_RECENT_FUNDING_EVENT')
export class FundingEventConsumer {
  constructor(
    private readonly fundingEventProducer: FundingEventProducer,
    @InjectModel(Song.name)
    private recentlyInvestmentModel: Model<SongDocument>,
    @InjectModel(Singer.name)
    private organizationModel: Model<SingerDocument>,
  ) {}

  @Process()
  async updateLastFundingEvent(job: Job) {
    console.log('job', job);
  }
}
