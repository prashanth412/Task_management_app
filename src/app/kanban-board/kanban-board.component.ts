import { Component } from '@angular/core';
import { Task } from '../Task';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskService } from '../service/task.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  tasks: any[]= [];
  currentItem: any;
  constructor(private taskService: TaskService, private httpClient: HttpClient) {
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res as any;
    });
  }

  // onDrop(event: CdkDragDrop<Task[]>): void {
  //   moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  // }
  drop(event: CdkDragDrop<Task[]>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    this.taskService.updateTaskOrder(this.tasks).subscribe();
  }

  filterStatus(status: string){
    return this.tasks.filter((m) => m.status == status);
  }

  onDragStart(item: any){
    this.currentItem = item;
  }

  onDrop(event: any, status: string){
    const updatedTask = this.tasks.find(m => m.id == this.currentItem.id)
    if(updatedTask !=undefined){
      updatedTask.status = status;
      this.taskService.updateTask(updatedTask).subscribe((res) => {
        
        this.taskService.getTasks().subscribe((res) => {
          this.tasks = res as any;
        });
      
      });
      this.currentItem = null;
    }
    }
     

  onDragOver(event: any){
    event.preventDefault();
  }
}
