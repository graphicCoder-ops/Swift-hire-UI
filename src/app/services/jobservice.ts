import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Job{
  id?:number;
  title:string;
  description:string;
  location:string;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http:HttpClient){}

  private url = 'https://swifthire-vy0q.onrender.com/jobs';

  getJobs():Observable<Job[]>{
    return this.http.get<Job[]>(this.url)
  }

  postJobs(job: Job): Observable<Job> {
    return this.http.post<Job>(this.url, job);
  }

}
