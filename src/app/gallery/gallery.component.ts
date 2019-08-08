import { Component, OnInit, Inject } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryPhotos: string[] = [];

  constructor(public galleryData: GalleryService, public dialog: MatDialog) {
    galleryData.galleryReady.subscribe(ready=>{
      this.galleryPhotos = galleryData.fileList
    })
  }

  ngOnInit() {
  }

  openDialog(imageUrl: string): void {
    const dialogRef = this.dialog.open(ImageViewDialog, {
      data: {photo: imageUrl}
    });
  }
}

@Component({
  selector: 'image-view-dialog',
  templateUrl: 'image-view-dialog.html',
})
export class ImageViewDialog {

  constructor(
    public dialogRef: MatDialogRef<ImageViewDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}