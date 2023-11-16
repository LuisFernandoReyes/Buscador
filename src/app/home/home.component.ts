import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any [] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.ApiService.getData().subscribe(data => {
      this.data= data.searchRetrieveResponse.records;
      console.log(this.data);
    })
  }  
}
