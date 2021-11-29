import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SutraCover } from "./sutra-cover";
import { Sutra } from './sutra';

@Injectable({
  providedIn: 'root'
})
export class SutraService {

  constructor(private http: HttpClient) { }

  getSutraList(): Observable<SutraCover[]> {
    return this.http.get<SutraCover[]>("assets/sutra/sutra-list.json");
  }

  getSutraByUid(uid: string): Observable<Sutra> {
    return this.http.get<Sutra>(`assets/sutra/${uid}.json`);
  }
}
