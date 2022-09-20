import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './login/login.component.html',
  styleUrls: ['./login/login.component.css']
})
export class AppComponent implements OnInit{
  title = 'TiendaDFront';
  titulo: string ='Hola';
  email: string = '';
  password: string = '';
  listaAlgo: any= [];
  data: any={"username":this.email,"password":this.password}

  constructor(private http:HttpClient) {
   //Aqui es lo que se ejecut al principio
  
  }

  public login() {
    this.data={"username":this.email,"password":this.password};
    this.http.post("https://localhost:44383/api/UsuariosExists",this.data).subscribe(values => {
      this.listaAlgo = values;
  });
  if (this.listaAlgo.Error !== undefined && !this.listaAlgo.Error)
    this.titulo='Logged as '+this.listaAlgo.objeto.Name;
    
  }
  ngOnInit(): void {
    this.http.get("https://localhost:44383/api/UsuariosExists",this.data).subscribe(values => {
      this.listaAlgo = values;
  });
  
  }
}
