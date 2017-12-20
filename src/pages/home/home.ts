import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { LightBlueService } from 'ionic-lightblue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private ble: BLE,public platform: Platform,
              private lightblue: LightBlueService) {


  }

}
