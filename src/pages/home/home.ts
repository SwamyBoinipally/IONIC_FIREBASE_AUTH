import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private aFauth: AngularFireAuth, private toast: ToastController) {
  }

  ionViewDidLoad() {
    this.aFauth.authState.subscribe(data =>{
      if(data && data.email && data.uid){
      this.toast.create({
        message:`Welcome to Home, ${data.email}`,
        duration: 3000
      }).present();
    }
    else{
      this.toast.create({
        message:`Couldn't find authentiction details`,
        duration: 2000
      }).present();
    }
    })
    console.log('ionViewDidLoad HomePage');

  }

}
