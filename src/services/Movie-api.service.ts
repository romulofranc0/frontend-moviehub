import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OmdbResponse } from '../app/models/OmdbResponse';
import { Movie } from '../app/models/Movie';

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

  getMovie(id:string): Observable<Movie>{
    return this.http.get<Movie>(
      `${this.apiUrl}details?imdbID=${id}`
    );
  }
}
