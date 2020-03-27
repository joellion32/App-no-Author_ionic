import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navCtrl: NavController, public alertController: AlertController, private userService: UserService) { }

  useRegister = {
  name: '',
  email: '',
  password: ''  
  }

  ngOnInit() {
  }

  // register FORM
  async register(Fregister: NgForm){
    if(Fregister.invalid){
      this.presentAlert('los campos son requeridos');
    }else{
      const valid = await this.userService.register(this.useRegister.name, this.useRegister.email, this.useRegister.password);

      if(valid){
        this.presentAlert('Usuario registrado correctamente');
        this.navCtrl.navigateRoot('login');
      }else{
        this.presentAlert('El usuario ya se encuentra registrado');
      }
    }
  }

  
  viewLogin(){
    this.navCtrl.navigateRoot('login', {animated: true});
  }


  // view alert
  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['ok']
    });
  
    await alert.present();
  }

}