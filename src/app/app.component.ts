import { Component, LOCALE_ID, OnInit} from '@angular/core';

// import 'rxjs-compat/add/operator/map';
// import 'rxjs-compat/add/operator/share';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  public date: Date = new Date();
  public hour: any;
  public minute: any;
  public second: any;
  public ampm: string;
  timer;
  // tslint:disable-next-line:ban-types
  flag: Boolean = true;
  constructor() {}
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.hour = this.date.getHours() > 12 ? this.date.getHours() - 12 : this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.ampm = this.date.getHours() > 12 ? 'PM' : 'AM';
    this.timer = setInterval(() => {
      if (this.flag) {
        // this.date = new Date();
        this.second += 1;
        if (this.hour >= 12) {
          this.hour = this.hour - 12;
          // tslint:disable-next-line:triple-equals
          this.ampm = this.ampm == 'AM' ? 'PM' : 'AM';
        }
        if (this.minute >= 60) {
          this.minute = this.minute - 60;
          this.hour = this.hour + 1;
        }
        if (this.second >= 60) {
          this.second = this.second - 60;
          this.minute = this.minute + 1;
        }
      }
    }, 1000);
  }

  // tslint:disable-next-line:typedef
  stop(){
    this.flag = !this.flag;
  }
}




