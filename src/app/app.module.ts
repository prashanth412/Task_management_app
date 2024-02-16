import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './filter/filter.pipe';
import { SortPipe } from './filter/sort.pipe';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { MatTabsModule } from '@angular/material/tabs';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FilterByStatusPipe } from './filter/filter-by-status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FilterPipe,
    SortPipe,
    AddNewTaskComponent,
    TaskDetailsComponent,
    KanbanBoardComponent,
    FilterByStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTabsModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
