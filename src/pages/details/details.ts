import { Component, NgZone } from '@angular/core';
import { NavController,Platform, NavParams} from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { ToastController } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

@Component({
  selector: 'details-page',
  templateUrl: 'details.html'
})

export class DetailsPage {
  //deviceDetails: string;
   //devices: any[] = [];
   //statusMessage: string;
   //public dana;
   dana: string;
   deviceDetails;


  constructor(public navCtrl: NavController, private ble: BLE,public platform: Platform, private toastCtrl: ToastController, private ngZone: NgZone, public navParams: NavParams, private deviceMotion: DeviceMotion) {
  //https://github.com/don/ionic-ble-examples/blob/master/scan/src/pages/home/home.ts

//logging right thing so something is wrong with theis
  // let deviceDetails = this.navParams.get('device');
  // console.log(deviceDetails);
  // console.log("devicedetails");
  // I think if I tried passing other data it would work but this just downst becuase it's not permanent, its just laoding.
  // console.log(this.navParams.get('title'));
  // this.dana = this.navParams.get('title');

  console.log('devicedetails');
  console.log(this.navParams.get('device'));
  console.log(this.navParams.get('device.id'));
  console.log(this.navParams.get('id'));
  // this.deviceDetails = this.navParams.get('device.id');
  this.deviceDetails = this.navParams.get('id');

  //search for device with this id
  //connect to that deivce
  //display its current accelerometer data
  //store it accelerometer data
  //put accelerometer data into an equation that outputs velocity
  //put velocity in an equation that outputs miles per hour
  //graph data

  }

}
