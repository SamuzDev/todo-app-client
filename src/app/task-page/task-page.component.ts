import { Component, inject, OnInit } from '@angular/core';
import { ITask } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent implements OnInit {
    //variable task
    task?: ITask;
    Id: string = '';

    // injectcion taskService
    private taskService = inject(TaskService);
    private route = inject(ActivatedRoute);

    // metodo ngOnInit() donde se carge la tarea por id
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.Id = params['id'];
      });
      this.taskService.getTaskById(this.Id).subscribe(task =>{
        this.task = task;
        console.log(this.task);
      })
    }
}
