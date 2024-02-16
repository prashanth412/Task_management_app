import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

const routes: Routes = [
  { path: 'tab1', component: TaskListComponent },
  { path: 'tab2', component: TaskDetailsComponent },
  { path: 'tab3', component: KanbanBoardComponent },
  // { path: 'tab3', component:  },
  { path: '', redirectTo: '/tab1', pathMatch: 'full' }, // Redirect to tab1 by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
