import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  imageUrl: SafeUrl | undefined;
  imageSrc: string | undefined;


  constructor(private _articleService: ArticleService, private _dialogRef: DialogRef<ImageComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this._articleService.generateIndividualBarCode(this.data.extraData).subscribe({
      next: (blob: Blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          if (reader.result) { // Check if reader.result is not null
            const base64data = reader.result.toString();
            this.imageSrc = base64data;
          }
        };
      },
      error: (error: any) => {
        console.error(error);
      }
    })
  }

  downloadImage() {
    const link = document.createElement('a');
    link.download = 'image.png';
    if (typeof this.imageSrc === 'string') {
      link.href = this.imageSrc;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this._dialogRef.close();
    }
  }

}
