import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient, private storage: Storage) { }



  // request login

   login(email: string, password: string){
    const data = {email, password}

    return new Promise(resolve => {
      this.http.post(`${this.url}/login`, data).subscribe(
        resp => {
          console.log(resp);
   
         if(resp['ok']){
          this.saveToken(resp['token']);  
          resolve(true); 
         }
   
        }, (err) => {
          console.log(err);
          this.token = null;  
          this.storage.clear();
          resolve(false);
        } 
       )
    })
    
  } // end function


  // request register
  register(name: string, email: string, password: string){
    const data = {
     name,
     email,
     password, 
    }
  
    return new Promise( resolve => {
      this.http.post(`${this.url}/users/register`, data).subscribe(resp=> {
        if(resp['ok']){
          console.log(resp); 
          resolve(true);
        }
       }, (err) => {
         console.log(err);
         resolve(false);
       });
    });
  
  }



  async saveToken(token: string){
    this.token = token;
    await this.storage.set('token', token);
  }


}