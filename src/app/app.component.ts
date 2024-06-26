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

  openAlert(c: Content) {
    alert("id: "+c.contentId+"\n"+"title: "+c.title+ "\n"+"type: "+ c.contentType+ "\n"+ "creation date: "+ c.creationDate+ "\n"+"duration: "+ c.onDemandDuration)
  }

  onSearch(searchTerm: string) {

    this.getData(searchTerm);
   

  }



  getData(searchTerm?: string) {
    this.apiService.getData(searchTerm).subscribe(
      (data) => {
        // Handle successful response
        this.data = data;
        console.log(data)
      },
      (error) => {
        // Handle errors here
        console.error(error);
      }
    );

}


removeContent(contentId: string,event: Event){
  
  event.stopPropagation();

  this.apiService.deleteContent(contentId).subscribe(
    () => {
      // Item deleted successfully, update the data
      this.data = this.data.filter((item) => item.contentId !== contentId);
    },
    (error) => {
      // Handle errors here
      console.error(error);
    }
  );
  
    
}


}


