import {Inject, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable()
export class TripDataService {

  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE)private storage: Storage) { }
    url = 'http://localhost:3000/api/trips';

    private apiBaseUrl = 'http://localhost:3000/api/';
    private tripUrl = `${this.apiBaseUrl}trips/`;



  public addTrip(formData:Trip): Promise<Trip>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    console.log('Inside TRipDataService #addTrip');
    console.log(formData);
    return this.http
      .post(this.tripUrl, formData, httpOptions)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }
      
    
  getTrip(tripCode: String): Promise<Trip>{
    console.log('Inside TripDataService #get Trip(trip code)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response as Trip)
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log("Inside TripDataService#getTrips");
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }


  updateTrip(formData:Trip): Promise<Trip>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    console.log('Inside TRipDataService #updateTrip');
    console.log(formData);
    return this.http
      .post(this.tripUrl, formData, httpOptions)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  private handleError(error:any): Promise<any>{
    console.log('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse>{
    return this.makeAuthApiCall('login', user);
  }

public register(user:User): Promise<AuthResponse>{
  return this.makeAuthApiCall('register', user);
}
 private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse>{
      const url: string=`${this.apiBaseUrl}/${urlPath}`;
      return this.http
        .post(url, user)
        .toPromise()
        .then(response => response as AuthResponse)
        .catch(this.handleError);
    }
  }


