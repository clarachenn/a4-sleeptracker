import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { NavController } from '@ionic/angular';
import { SleepService } from '../services/sleep.service';
import { Share } from '@capacitor/share';
import { LocalNotifications } from '@capacitor/local-notifications';


@Component({
  selector: 'app-logged-sleep-data',
  templateUrl: './logged-sleep-data.page.html',
  styleUrls: ['./logged-sleep-data.page.scss'],
})
export class LoggedSleepDataPage implements OnInit {

  overnightSleepData: OvernightSleepData[] = [];

  constructor(private navController: NavController) {
  }

  ngOnInit() {
    this.overnightSleepData = [...SleepService.AllOvernightData];
  }

  goBack() {
    this.navController.pop();
  }

  async shareData(data: OvernightSleepData) {
    try {
      await Share.share({
        text: `Summary: ${data.summaryString()}\nDate: ${data.dateString()}`,
      });
    } catch (error) {
      console.error('Error sharing data', error);
    }
  }

   
}
