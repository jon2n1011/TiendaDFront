import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Constants } from '../config/constants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo: string ='Hola';
  email: string = '';
  password: string = '';
  listaAlgo: any= [];
  data: any={"username":"espanya","password":"espanya"}

  constructor(private http:HttpClient) {
   //Aqui es lo que se ejecut al principio
  
  }

  public login() {

    this.http.get("https://localhost:44383/api/UsuariosExists",this.data).subscribe(values => {
      this.listaAlgo = values;
  });
  if (this.listaAlgo != null)
    this.titulo='Logged as';
     //this.listaAlgo=this.http.get<any>("https://localhost:44383/api/ordenes",{observe:'response',responseType:'json'});

  }
  ngOnInit(): void {
    this.http.get("https://localhost:44383/api/UsuariosExists",this.data).subscribe(values => {
      this.listaAlgo = values;
  });
  
  }
}
