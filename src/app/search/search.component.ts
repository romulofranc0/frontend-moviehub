import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MovieApi } from '../../services/Movie-api.service';
import { Movie } from '../models/Movie';
import { OmdbResponse } from '../models/OmdbResponse';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, CommonModule, CardModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title:string ='';
  movies: Movie[] = [];
  errorMessage: string = '';
  loading:boolean = false;



  constructor(private movieApi:MovieApi){}

  searchMovies() {
    this.loading = true;

      this.movieApi.getMovies(this.title).subscribe({
        next:(response: OmdbResponse) =>{
          this.movies = response.Search;
          this.loading = false;
        }
      });
      }
}

