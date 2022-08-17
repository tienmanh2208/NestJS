import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasks: Repository<Task>,
  ) {}

  async getTaskById(taskId: string): Promise<Task> {
    const found = await this.tasks.findOneBy({ id: taskId });

    if (!found) {
      throw new NotFoundException('Task not found!');
    }

    return found;
  }
}
