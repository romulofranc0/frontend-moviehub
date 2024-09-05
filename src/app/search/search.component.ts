import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { OmdbResponse } from '../models/OmdbResponse';
import { MovieApi } from '../../services/Movie-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title:string ='';
  movies:OmdbResponse[] = [];
  errorMessage: string = '';

  constructor(private movieApi:MovieApi){}

  searchMovies() {

      this.movieApi.getMovies(this.title).subscribe({
        next:(response) =>{
          this.movies = response;
        }
      });
      }
}

