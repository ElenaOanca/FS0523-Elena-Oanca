import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';
import { FavouritesService } from '../../services/favourites.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss',
})
export class FavouritesComponent {
  favourites: {
    id: number;
    userId: number;
    cityName: string;
    cityLat: number;
    cityLon: number;
    cityId: number;
  }[] = [];

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    private favouritesService: FavouritesService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((accessData) => {
      if(!accessData?.user?.id) {
        this.router.navigate(['/auth']);
        return;
      }
      this.favouritesService
        .getFavourites(accessData?.user.id)
        .subscribe((data: any) => {
          this.favourites = data;
        });
    });
  }

  deleteFavourite(id: number) {
    this.authService.user$.subscribe((accessData) => {
      if(!accessData?.user?.id) {
        this.router.navigate(['/auth']);
        return;
      }
      this.favouritesService
        .deleteFavourite(id).pipe(take(1))
        .subscribe((data: any) => {
          this.favourites = data;
        });
    });
  }
}
