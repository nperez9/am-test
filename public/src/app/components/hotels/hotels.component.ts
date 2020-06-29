import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css', 'filter.css']
})

export class HotelsComponent implements OnInit {
  hotels:any;
  name:string;
  stars:Array<number>;
  
  constructor(private http:HttpClient) { 
    this.name = '';
    this.stars = [];
  }


  ngOnInit() {
    this.searchHotels();
  }

  searchHotels() {
    let fetchURL = `${environment.baseUrl}hotels/?`;
    console.log(this.stars);
    if (this.name != '') fetchURL += `name=${this.name}&`;
    if (this.stars.length > 0) fetchURL += `stars=${this.stars.join(',')}&`;

    this.http.get(fetchURL).subscribe(
    (res:any) => {
      this.hotels = res;
    });
  }

  starChange(event) {
    let action = event.target.checked;
    let value = event.target.value;
    
    if (action)
      this.stars.push(value);
    else  {
      var index = this.stars.indexOf(value);
      if (index !== -1) this.stars.splice(index, 1);
    }
    
    this.searchHotels();
  }

  starClean(event) {
    if (event.target.checked) {
      this.stars = [];
      const starcheck = document.getElementsByClassName('starCheck');

      for (let i = 0; i < starcheck.length; i++) {  
        let star = starcheck[i] as HTMLInputElement;
        star.checked = false;
      }
    }
    this.searchHotels();    
  }

  counter (length) {
    return new Array(length);
  }
}
