// Angular Modules
import { Injectable } from '@angular/core'; 
@Injectable() 
export class Constants {
public readonly API_ENDPOINT: string = 'https://localhost:44383/api/'; 
public readonly FaseVotacion: boolean=true;
public readonly  RutaAssets: string='https://localhost:44383/api/';
//public readonly API_MOCK_ENDPOINT: string = 'https://www.userdomainmock.com/'; 
public static TitleOfSite: string = " Tienda DropShipping"; 
} 