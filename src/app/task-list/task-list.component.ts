import { Component } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../service/task.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: any[]= [];
  dataSource = new MatTableDataSource<Task>();
  displayedColumns: string[] = ['title', 'description', 'priorityLevel','dueDate', 'status'];
  filterText = '';
  sortBy = 'priorityLevel';
  sortDirection = 'asc';
  isModalOpen = false;

  

  constructor(private taskService: TaskService, private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:3000/tasks').subscribe((res) => {
      this.tasks = res as any;
    });
  }

  ngOnInit(): void {
   
  }

  editItem(id: number): void  {
    // Implement edit functionality
    
      const index = this.tasks.findIndex(row => row.id === id);
      if (index !== -1) {
        this.tasks[index].editable = !this.tasks[index].editable;
      }
    
  }

  viewItem(id: number) {
    // Implement view functionality
    console.log(`View item with id ${id}`);
  }

  deleteItem(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
    });
  }
  onStatusChange(element: Task) {
    // Implement logic for status change, if needed
    console.log(`Status changed for item with id ${element.id} to ${element.status}`);
  }

  setSort(column: string) {
    if (this.sortBy === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortBy = column;
      this.sortDirection = 'asc';
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  addTask(newTask: any) {
    // Handle the new task, e.g., add it to the task list
    console.log('New Task:', newTask);

    // Close the modal
    this.isModalOpen = false;
  }

  closeTask(value: any) {
    // Handle the new task, e.g., add it to the task list
   // console.log('New Task:', newTask);

    // Close the modal
    this.isModalOpen = false;
  }

  

}

