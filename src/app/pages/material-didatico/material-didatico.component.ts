import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DesignService } from '@shared/services/design.service';
import { MaterialDidatico } from '@shared/interfaces/material-didatico.interface';
import { SwiperOptions, Swiper } from 'swiper';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.scss']
})
export class MaterialDidaticoComponent implements OnInit {

  @ViewChild('swiperContainer') swiperContainer: ElementRef;

  public startDate: Date;
  public endDate: Date;
  public designs: MaterialDidatico[];

  constructor(private designService: DesignService) {
    window['desings'] = this;
  }

  public ngOnInit(): void {
    this.getDesigns();
  }

  private setDates(): void {
    this.startDate = this.designs?.[0]?.update;
    this.endDate = this.designs?.[this.designs?.length - 1]?.update;
  }

  private getDesigns(): void {
    this.designService.getDesigns()
      .subscribe((designs: MaterialDidatico[]) => {
        this.designs = designs;
        this.setDates();
      });
  }

  public prevSlide(): void {
    (this.swiperContainer?.nativeElement?.swiper as Swiper)?.slidePrev();
  }

  public nextSlide(): void {
    (this.swiperContainer?.nativeElement?.swiper as Swiper)?.slideNext();
  }
}
