import { Component, NgZone } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'details-page',
  templateUrl: 'details.html'
})

export class DetailsPage {
   devices: any[] = [];
   statusMessage: string;

  constructor(public navCtrl: NavController, private ble: BLE,public platform: Platform, private toastCtrl: ToastController, private ngZone: NgZone) {
  //https://github.com/don/ionic-ble-examples/blob/master/scan/src/pages/home/home.ts

  }
  /*ionViewDidEnter() {
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

  choose(){
    this.navCtrl.push(Details);
  }*/


}
