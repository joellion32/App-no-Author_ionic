import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, AlertController, NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

// variables
  loginUser = {
    email: '',
    password: ''
  }

 
  constructor(public alertController: AlertController, public userService: UserService, private navCtrl: NavController) { }

  
  ngOnInit() {

  }

  async login(Flogin: NgForm){
    if(Flogin.invalid){
      this.presentAlert('Los campos son requeridos');
    }else{
      const valido = await this.userService.login(this.loginUser.email, this.loginUser.password);

    if(valido){
      this.navCtrl.navigateRoot('home', {animated: true});
    }else{
      this.presentAlert('Email o Contraseña incorrectos');
    }
    }
  }
  
  viewRegister(){
    this.navCtrl.navigateRoot('register', {animated: true});
  }

  /* alerta por si el formulario es invalido
  alert if the form is invalid
  */

 async presentAlert(message) {
  const alert = await this.alertController.create({
    header: 'Error',
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}


}
