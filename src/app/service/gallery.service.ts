import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private ready = new BehaviorSubject(false);
  public galleryReady = this.ready.asObservable();
  public fileList;

  constructor(private http: HttpClient) { 
    this.http.get('assets/gallery/assetIndex.json')
      .subscribe((data:any) => {
        console.log("Got Data", data.files);
        if(data)
        {
          this.fileList = data.files;
          this.ready.next(true);
        }
    })
  }
}
