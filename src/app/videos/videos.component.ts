import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../Service/video-service.service';
import { Video } from '../Model/VideoModel';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  //title: string ='E-commerce';
  listVideo!:Video[];
  constructor(private VideoS : VideoServiceService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  delete(id:number){
    this.VideoS.deleteVideo(id).subscribe({
      next:() => this.listVideo=this.listVideo.filter((p)=> p.id!)
    })
  }

  getVideos() {
    this.VideoS.getVideos().subscribe((data: any) => {
      this.VideoS=data;
      return data;
      });
  }

  incrementShares(video:any) {
    if (video.public) {
      video.nbrShared++;
      this.VideoS.increment(video.id).subscribe();
    }
  }

  editVideo(video:any){
    if (video.nbrShared==0) {
      
      this.VideoS.update(video.id).subscribe();
    }
  }


}
