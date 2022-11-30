import { Component, OnInit } from '@angular/core';
import { Names } from 'src/app/models/Names';
import { Photos } from 'src/app/models/Photos';
import { Rescue } from 'src/app/models/Rescue';
import { NamesService } from 'src/app/services/names.service';
import { PhotosService } from 'src/app/services/photos.service';
import { RescueService } from 'src/app/services/rescue.service';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
})
export class RightSideComponent implements OnInit {
  constructor(
    private _rescueService: RescueService,
    private _namesService: NamesService,
    private _photosService: PhotosService
  ) {}

  rescue!: boolean;
  names!: boolean;
  photos!: boolean;
  rescueData!: Rescue;
  namesData!: Names;
  photosData!: Photos;

  values!: string[];
  namesValues!: string[];
  photosValues!: string[][];

  ngOnInit() {
    this._namesService.getNames().subscribe((data) => {
      if (data) {
        this.names = true;
        this.namesData = data;
      }
    });

    this._photosService.getPhotos().subscribe((data) => {
      if (data) {
        this.photos = true;
        this.photosData = data;
      }
    });

    this._rescueService.getRescue().subscribe((data) => {
      if (data) {
        this.rescue = true;
        this.rescueData = data;
      }
    });

    this.rescueData.elements.details.forEach((element) => {
      element.value.forEach((elem) => {
        this.values.push(elem.value);
      });
    });

    this.namesData.elements.forEach((element) => {
      this.namesValues.push(
        `${element.firstName} ${element.lastName} ${element.birthYear} ${element.placeOfResidence} ${element.source}`
      );
    });

    this.photosData.elements.forEach((element) => {
      element.images.forEach((image) => {
        this.photosValues[0].push(image.title);
        this.photosValues[1].push(image.url);
      });
    });
  }
}
