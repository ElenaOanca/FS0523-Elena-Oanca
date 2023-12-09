import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {
  GeocodingResponse,
  WeatherService,
} from '../../services/weather.service';
import { take } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  city: string = '';
  foundCities: GeocodingResponse[] = [];

  ngOnInit() {}

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  searchCity() {
    this.weatherService
      .getCityGeocoding(this.city)
      .pipe(take(1))
      .subscribe((response) => {
        console.log(response);
        this.foundCities = response;
      });
  }

  goToWeather(lat: number, lon: number) {
    this.router.navigate(['/city'], {
      queryParams: {
        lat,
        lon,
      },
    });
  }
}
