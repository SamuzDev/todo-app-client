import { inject, Injectable } from '@angular/core';
import { ITask } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl: string = 'http://localhost:3000/tasks';

  private http = inject(HttpClient);
  
  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseUrl);
  }

  createTask(task: ITask): Observable<ITask>{
    return this.http.post<ITask>(this.baseUrl, task);
  }

  getTaskById(id: string): Observable<ITask>{
    return this.http.get<ITask>(`${this.baseUrl}/${id}`);
  }

}