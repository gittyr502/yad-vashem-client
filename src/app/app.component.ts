import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

('@angular/core');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 50.065514051349126, lng: 19.946365356445312 },
    zoom : 14
 }

 marker = {
  position: { lat: 50.065514051349126, lng: 19.946365356445312},
}
}
