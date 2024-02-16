// filter-by-status.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Task';


@Pipe({
  name: 'filterByStatus',
})
export class FilterByStatusPipe implements PipeTransform {
  transform(tasks: Task[], status: string): Task[] {
    return tasks.filter(task => task.status === status);
  }
}