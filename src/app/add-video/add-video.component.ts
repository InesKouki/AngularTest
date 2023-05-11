import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoServiceService } from '../Service/video-service.service';
import { Video } from '../Model/VideoModel';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  video!: Video;
  constructor(private route:Router,
    private videoservice: VideoServiceService) { }

  ngOnInit(): void {
  }

  
addVideo(){
  this.videoservice.add(this.video).subscribe({
    next:() => this.route.navigateByUrl("/videos"),
    error:(error) => console.log(error)
  });

}

}
