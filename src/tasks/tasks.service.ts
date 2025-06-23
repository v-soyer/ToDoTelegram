import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { User } from '../users/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  findAllByUser(user: User): Promise<Task[]> {
    return this.tasksRepository.findAllByUser(user);
  }

  findOneById(id: number, user: User): Promise<Task> {
    return this.tasksRepository.findOneById(id, user);
  }

  create(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto, user);
  }

  update(id: number, updateTaskDto: UpdateTaskDto, user: User): Promise<Task> {
    return this.tasksRepository.updateTask(id, updateTaskDto, user);
  }

  remove(id: number, user: User): Promise<void> {
    return this.tasksRepository.deleteTask(id, user);
  }

  findIncompleteTasksByUser(user: User): Promise<Task[]> {
    return this.tasksRepository.findIncompleteByUser(user);
  }
}