import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/core.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  imageUrl: any;
  imageSrc: string | undefined;
  pdfUrl: any;

  @ViewChild('printFrame') printFrame: ElementRef | undefined;

  constructor(private _articleService: ArticleService,
    private _dialogRef: MatDialogRef<FileUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  uploadFile(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    if (this.data.extraData == 'bulkBarCode') {
      console.log(this.data.extraData);
      this._articleService.bulkBarCode(formData).subscribe({
        next: (blob: Blob) => {
          // const reader = new FileReader();
          // reader.readAsDataURL(blob);
          // reader.onloadend = () => {
          //   if (reader.result) { // Check if reader.result is not null
          //     const base64data = reader.result.toString();
          //     this.imageSrc = base64data;
          //   }
          // };
          let url = window.URL.createObjectURL(blob);
          this.pdfUrl = url;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
    else {
      console.log(this.data.extraData);
      this._articleService.addBulkArticle(formData).subscribe({
        next: (blob: Blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            if (reader.result) { // Check if reader.result is not null
              const base64data = reader.result.toString();
              this.imageSrc = base64data;
              this._dialogRef.close();
            }
          };
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
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

  // print() {
  //   if (!this.printFrame) {
  //     console.error('Print frame not found.');
  //     return;
  //   }
  //   const printContent = `<html><body><img src="${this.imageSrc}"></body></html>`;
  //   const iframe = this.printFrame.nativeElement;
  //   const doc = iframe.contentWindow.document;
  //   doc.open();
  //   doc.write(printContent);
  //   doc.close();
  //   iframe.contentWindow.focus();
  //   iframe.contentWindow.print();
  // }

}
