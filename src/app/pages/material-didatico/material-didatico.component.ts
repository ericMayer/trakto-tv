import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Swiper } from 'swiper';

import { AnimationOptions } from 'ngx-lottie';

import { DesignService } from '@shared/services/design.service';
import { MaterialDidatico } from '@shared/interfaces/material-didatico.interface';
import { openSnackBarAlert } from '@shared/utils/alert.utils';

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
  public isLoading: boolean = true;

  public animationOptions: AnimationOptions = {
    path: 'assets/animations/empty-box.json',
  };

  constructor(
    private designService: DesignService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  public ngOnInit(): void {
    this.getDesigns();
  }

  private setDates(): void {
    this.startDate = this.designs?.[0]?.update;
    this.endDate = this.designs?.[this.designs?.length - 1]?.update;
  }

  private getDesigns(): void {
    this.designService.getDesigns()
      .subscribe({
        next: (designs: MaterialDidatico[]) => {
          this.designs = designs;
          this.isLoading = false;
          this.setDates();
        },
        error: () => {
          openSnackBarAlert(this.snackBar, {
            message: 'Desculpe, não foi possível carregar as informações 😢. Por favor tente novamente.'
          });
          this.isLoading = false;
        }
      });
  }

  public prevSlide(): void {
    (this.swiperContainer?.nativeElement?.swiper as Swiper)?.slidePrev();
  }

  public nextSlide(): void {
    (this.swiperContainer?.nativeElement?.swiper as Swiper)?.slideNext();
  }

  public goListMaterialDidatico(): void {
    this.router.navigateByUrl('material-didatico/lista');
  }

  public openEditor(): void {
    window.open('https://dashboard.trakto.io/app/home', '_blank');
  }
}
