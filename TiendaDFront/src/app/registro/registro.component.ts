import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

interface IRegisterForm {


name: string;
email:string;
password:string;
repeatPass:string;
telefono:number;

}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

register: IRegisterForm ={
name: "",
email:"",
password:"",
repeatPass:"",
telefono:0
};
errorMessage: string="";
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  submit (){
    this.http.post<any>("https://localhost:44383/api/Usuarios",this.register).subscribe(data => {
        this.errorMessage = data.id;
  })

}
}
