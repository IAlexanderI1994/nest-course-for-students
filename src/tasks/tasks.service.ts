import {Injectable} from '@nestjs/common';
import {Task, TaskStatus} from "./interfaces";
import {CreateTaskDto} from "./dto/create-task.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks
    }

    createTask({title, description}: CreateTaskDto): Task {
        const task = {
            title,
            description,
            id: uuidv4(),
            status: TaskStatus.OPEN
        }
        this.tasks.push(task)
        return task;
    }
}

