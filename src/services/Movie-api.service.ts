import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OmdbResponse } from '../app/models/OmdbResponse';
import { Movie } from '../app/models/Movie';
import { MovieDetails } from '../app/models/MovieDetails';

@Injectable({
  providedIn: 'root',
})
export class MovieApi {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getMovies(title: string): Observable<OmdbResponse> {
    return this.http.get<OmdbResponse>(
      `${this.apiUrl}movies?title=${title}`
    );
  }

 

  getMovieDetails(id:string): Observable<MovieDetails>{
    return this.http.get<MovieDetails>(
      `${this.apiUrl}details?imdbID=${id}`
    );
  }
}
