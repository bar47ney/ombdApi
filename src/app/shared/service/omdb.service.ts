import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Omdb } from '../model/omdb.model';

const API_URL= 'http://www.omdbapi.com/'
const API_KEY = '5236f745'

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http: HttpClient) { }

  public getMovies(name: string, type: string): Observable<Omdb> {
    return this.http.get<Omdb>(`${API_URL}?apikey=${API_KEY}&s=${name}&type=${type}`)
  }
}
