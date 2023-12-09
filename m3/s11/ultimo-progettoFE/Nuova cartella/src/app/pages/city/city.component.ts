import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  WeatherResponse,
  WeatherService,
} from '../../services/weather.service';
import { AuthService } from '../auth/auth.service';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
})
export class CityComponent {
  lat: number = 0;
  lon: number = 0;
  forecast: WeatherResponse | undefined;

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private favouriteService: FavouritesService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.lat = params['lat'];
      this.lon = params['lon'];
    });

    this.weatherService.getWeather(this.lat, this.lon).subscribe((response) => {
      console.log(response);
      this.forecast = response;
    });
  }
  addToFavourites() {
    this.authSvc.user$.subscribe((accessData) => {
      if (accessData) {
        console.log(accessData);
        if(!this.forecast?.city.id) return;
        this.favouriteService.addFavourite(Number(accessData.user.id), {
          name: this.forecast?.city.name || "Città sconosciuta",
          lat: this.lat,
          lon: this.lon,
          id: this.forecast?.city.id,
        });
      }else{
        console.log("Utente non loggato");

      }
    });
  }
}
