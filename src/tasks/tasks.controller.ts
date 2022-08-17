import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('/:id')
  getAllTasks(@Param('id') id: string) {
    return id;
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return createTaskDto;
  }
}
