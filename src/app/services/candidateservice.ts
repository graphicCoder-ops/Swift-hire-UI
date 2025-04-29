import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environment";


interface CandidateType{
  id:number;
  candidateFirstName:string;
  candidateLastName:string;
  candidateEmail:string;
  candidatePhone:number;

}
@Injectable({
  providedIn: 'root',
})    

export class CandidateService{

  constructor (private http:HttpClient){}

  getCandidate() :Observable<CandidateType[]>{
    return this.http.get<CandidateType[]>(environment.API_URL + "/candidates")
  }


}