import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-diarywedding',
  templateUrl: './diarywedding.component.html',
  styleUrls: ['./diarywedding.component.css']
})
export class DiaryweddingComponent implements OnInit {

  constructor(private http: HttpClient) { };

  title = 'fileUpload';
  images;
  multipleImages = [];




  ngOnInit(): void {


  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  onMultipleSubmit() {
    const formData = new FormData();
    for (let img of this.multipleImages) {
      formData.append('files', img);
    }

    this.http.post<any>('http://localhost:3300/multipleFiles', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
