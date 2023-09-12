import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  data: any;

  constructor(private apiService: ApiServiceService){

  }
  ngOnInit(): void {
    this.getAllData();
  }


  getAllData() {

    try{
    this.apiService.getAllData().subscribe((data) => {
      this.data = data;
      console.log(data)
    });
    }
    catch(err){
      console.log(err)
    }

}
}


