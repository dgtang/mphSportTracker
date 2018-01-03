import { Component, NgZone } from '@angular/core';
import { NavController,Platform, NavParams } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { ToastController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
   devices: any[] = [];
   statusMessage: string;

  constructor(public navCtrl: NavController, private ble: BLE,public platform: Platform, private toastCtrl: ToastController, private ngZone: NgZone, public navParams: NavParams) {
  //https://github.com/don/ionic-ble-examples/blob/master/scan/src/pages/home/home.ts

  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.scan();
  }

  scan() {
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = [];  // clear list
    console.log('here1');
    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
      error => this.scanError(error)
    );

    console.log('here2');
    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  // If location permission is denied, you'll end up here
  scanError(error) {
    this.setStatus('Error ' + error);
    let toast = this.toastCtrl.create({
      message: 'Error !!',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

//make it pass each individual one like devie.id, device.rssi etc??
//https://www.youtube.com/watch?v=T5iGAAypGBA&t=418s
  choose(device){

  // let data = {
  //   title: 'yummy pancakes',
  //   ingredients: [
  //     'flour',
  //     'pancake stuff'
  //   ],
  //   time: '10 minutes'
  // };
  // this.navCtrl.push(DetailsPage,data);
    console.log("device");
    console.log(device.id);
    console.log(device);
    this.navCtrl.push(DetailsPage,device);
    //this.navCtrl.push(DetailsPage,device.id);
  }


}
