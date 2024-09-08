import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MovieApi } from '../../services/Movie-api.service';
import { Movie } from '../models/Movie';
import { OmdbResponse } from '../models/OmdbResponse';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DetailsComponent } from '../details/details.component';
import {Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    CardModule,
    ProgressSpinnerModule,
    DetailsComponent,
    RouterModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  title: string = '';
  movies: Movie[] = [];
  errorMessage: string = '';
  loading: boolean = false;
  imdbID:string = '';

  constructor(private movieApi: MovieApi, private router:Router) {}

  searchMovies() {
    this.loading = true;

    this.movieApi.getMovies(this.title).subscribe({
      next: (response: OmdbResponse) => {
        this.movies = response.Search;
        this.loading = false;
      },
    });
  }

  navigateToDetails(imdbID: string) {
    this.router.navigate(['/details', imdbID]);
  }
}
