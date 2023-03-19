import {Component} from '@angular/core';
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yolho';
  url_logo = "assets/images/Senza_titolo.jpg";

  constructor(private appService: AppService) {
  }


  public onDownload() {
    this.appService.downLoad().subscribe((data) => {

      var blob = new Blob([data], {type: 'APPLICATION/OCTET-STREAM'});

      var downloadURL = window.URL.createObjectURL(data);
      var link = document.createElement('a');
      link.href = downloadURL;
      link.download = "game.zip";
      link.click();

    });


  }
}
