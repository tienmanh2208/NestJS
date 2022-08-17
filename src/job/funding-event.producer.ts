import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FundingEventProducer {
  constructor(
    @InjectQueue('QUEUE_RECENT_FUNDING_EVENT')
    private fundingEventQueue: Queue,
  ) {}

  async triggerQueue() {
    console.log('Job update recent funding events is running.' + new Date());
    await this.fundingEventQueue.add({});
  }
}
