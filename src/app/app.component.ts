import { Component, OnInit } from '@angular/core'
// import { Router } from '@angular/router'
import { AppRoutes } from './app.routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    title = 'angular-testpage'

    ngOnInit() {
        console.log(AppRoutes)
    }
}
