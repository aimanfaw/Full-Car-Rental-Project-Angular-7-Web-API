import { CarsImageService } from './../ImagesShared/cars-image.service';
import { CarsService } from './../carsShared/cars.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  myImage :string="/assets/CarsImages/defaultImage.jpg"
  uploadFile:File;
  constructor(private carsService:CarsService,private router:Router,private imageService:CarsImageService) { }

  ngOnInit() {
  }



  onFile(file:FileList){
    this.uploadFile = file.item(0);

    //display image

    var reader = new FileReader();
    reader.onload = (event:any)=>{
      this.myImage = event.target.result;
    }
    reader.readAsDataURL(this.uploadFile);
  }

onSubmit(ImageName,Image){
  this.imageService.PostImage(ImageName.value,this.uploadFile).subscribe(res=>{
    console.log('done');
    Image.value =null;
  })
  this.router.navigate(['/addtypecars'])
}

}
