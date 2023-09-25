import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Content } from './data/Content';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  data :Content[] = [];

  constructor(private apiService: ApiServiceService){

  }
  ngOnInit(): void {
    this.getData();
  }



  onSearch(searchTerm: string) {

    this.getData(searchTerm);
   

  }



  getData(searchTerm?: string) {
    try{
      this.apiService.getData(searchTerm).subscribe((data) => {
        this.data=data;
        console.log(data)
      });
      }
      catch(err){
        console.log(err)
      }

}


removeContent(contentId: string){
  try{
    this.apiService.deleteContent(contentId).subscribe(() => {
      this.data=this.data.filter((item) => item.contentId !== contentId);;
    });
    }
    catch(err){
      console.log(err)
    }
}


}


