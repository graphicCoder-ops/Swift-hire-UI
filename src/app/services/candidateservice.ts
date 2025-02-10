import { Injectable } from "@angular/core";

interface CandidateType{
    name:string;
    applied:string;
    email:string;
    phone:number;
    address:string;
    city:string;
}
@Injectable({
  providedIn: 'root',
})    

export class CandidateService{
    getCandidate(): CandidateType[] {
        return [
            {
              name: "Tirth Patel",
              applied: "Feb 10 , 2025",
              email:"tirthspatel1116@gmail.com",
              phone:4169034704,
              address:"78 corkett drive",
              city:"Brampton"
            },
            {   name: "Shahbaj singh",
                applied: "Feb 01 , 2025",
                email:"graphiccoder@gmail.com",
                phone:437999999,
                address:"14 New london ct",
                city:"Brampton"},
          ];
    }

}