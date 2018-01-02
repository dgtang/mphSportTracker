import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
//import { LightBlueService } from 'ionic-lightblue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
   LIGHTBLUE_NAME = 'BeanName';
   OPTIONAL_END_SERIAL_RESPONSE_CHAR = "\n";

  constructor(public navCtrl: NavController, private ble: BLE,public platform: Platform) {
    /*private lightblue: LightBlueService*/
              /*  platform.ready().then(() => {
      console.log('platform ready');

      // OPTIONAL_END_SERIAL_RESPONSE_CHAR used when sendSerial isWaitResponse = true
      this.lightblue.connect(LIGHTBLUE_NAME, OPTIONAL_END_SERIAL_RESPONSE_CHAR).subscribe(next => {
          console.log("connected");

          this.lightblue.readSerial().subscribe( next => {
              console.log(next);
          },
          error => {
            console.log(error.toString());
          })
      },
      error => {
        console.log(error.toString());
      });
    });
  }

  onSend() {
    console.log("send");
    // Can wait or not wait response
    this.lightblue.sendSerial("command", true).subscribe(next => {
      console.log(next);
    },
    error => {
      console.log(error.toString());
    });

  }*/

  }
  scan(set, seconds){
    set = [];
    seconds = 100;
    console.log("hi");
  }

  stopScan(){
    console.log("hello");
  }

}
