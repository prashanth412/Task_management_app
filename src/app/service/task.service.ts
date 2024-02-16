import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // addTask(task: Task): void {
  //   this.tasks.push(task);
  // } 

  updateTaskOrder(tasks: Task[]): Observable<Task[]> {
    return this.http.put<any[]>(this.apiUrl, tasks);
  }

  updateTask(task: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${task.id}`, task);
  }
}