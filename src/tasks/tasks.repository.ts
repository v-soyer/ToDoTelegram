import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { User } from '../users/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksRepository {
  constructor(
    @InjectRepository(Task)
    private readonly repo: Repository<Task>,
  ) {}

  async findAllByUser(user: User): Promise<Task[]> {
    return this.repo.find({ where: { user }, order: { createdAt: 'DESC' } });
  }

  async findOneById(id: number, user: User): Promise<Task> {
    const task = await this.repo.findOne({ where: { id, user } });
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const task = this.repo.create({ ...createTaskDto, user });
    return this.repo.save(task);
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto, user: User): Promise<Task> {
    const task = await this.findOneById(id, user);
    if (updateTaskDto.isCompleted !== undefined) {
      task.isCompleted = updateTaskDto.isCompleted;
      task.completedAt = updateTaskDto.isCompleted ? new Date() : null;
    }
    if (updateTaskDto.title) task.title = updateTaskDto.title;
    return this.repo.save(task);
  }

  async deleteTask(id: number, user: User): Promise<void> {
    const task = await this.findOneById(id, user);
    await this.repo.remove(task);
  }

  async findIncompleteByUser(user: User): Promise<Task[]> {
    return this.repo.find({ where: { user, isCompleted: false } });
  }
}