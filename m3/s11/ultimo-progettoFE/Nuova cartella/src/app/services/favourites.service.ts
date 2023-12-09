import { Injectable } from '@angular/core';
import { AuthService } from '../pages/auth/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor(
    private authSvc: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  getFavourites(userId: string) {
    return this.http
      .get('http://localhost:4200/favourites?userId=' + userId)

  }

  addFavourite(userId: number, cityData:{name: string, lat: number, lon: number, id: number}) {
    return this.http
      .post('http://localhost:4200/favourites', {
        userId: userId,
        cityName: cityData.name,
        cityLat: cityData.lat,
        cityLon: cityData.lon,
        cityId: cityData.id
      })
      .pipe()
      .subscribe((data: any) => {
        console.log(data);
        return data;
      });
  }

  deleteFavourite(id: number) {
    return this.http
      .delete('http://localhost:4200/favourites/' + id)

  }


}
