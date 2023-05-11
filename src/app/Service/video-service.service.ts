import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Video } from '../Model/VideoModel';
@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  url:string ='http://localhost:3000/video/';
  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Video[]>(this.url);
  }

  deleteVideo(id: any) {
    return this.http.delete(this.url+ id);
  }

  getVideo(id:any){
    return this.http.get<Video>(this.url+id);
  }

  add(Product: Video) {
    return this.http.post(this.url,Product);
  }
  increment(id:any){
   return this.http.put(this.url,id)
  }

  update(Product: Video) {
    return this.http.put(this.url,Product);
  }
}
