import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit{
 
  @Output() addTask = new EventEmitter<any>();
  @Output() closeTask = new EventEmitter<any>();
  
  task = {
    title: '',
    description: '',
    priorityLevel:'',
    status:'',
    dueDate:''
  };
  
  userForm!: FormGroup;
  constructor(private fb: FormBuilder, private taskService: TaskService) {}
  
  ngOnInit(): void {
    this.userForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      priorityLevel: ['', Validators.required],
      status: ['', Validators.required],
      dueDate: ['', Validators.required],
      // Add more form controls as needed
    });
  }

  onSubmit() {
    this.addTask.emit(this.userForm.value);
    // Optionally, reset the form
    this.task = { title: '', description: '',priorityLevel:'',status:'',dueDate:''};
  }

  closeModal() {
    this.closeTask.emit('false');
    // Optionally, reset the form
    this.task = { title: '', description: '',priorityLevel:'',status:'',dueDate:'' };
  }
}
