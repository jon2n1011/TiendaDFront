import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfigService } from '../config/config.service';
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
  email: string = '';
  password: string = '';
  listaAlgo: string[]=[];
  constructor(private http:HttpClient) {
   //Aqui es lo que se ejecut al principio
  
  }

  public login() {

   
     //this.listaAlgo=this.http.get<any>("https://localhost:44383/api/ordenes",{observe:'response',responseType:'json'});

  }
  ngOnInit(): void {
    this.http.get("https://localhost:44383/api/ordenes").subscribe(values => {
      this.listaAlgo = values as string[];
  });
  }
}
