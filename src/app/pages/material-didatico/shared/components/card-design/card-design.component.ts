import { Component, Input } from '@angular/core';

import { MaterialDidatico } from '@shared/interfaces/material-didatico.interface';

@Component({
  selector: 'app-card-design',
  templateUrl: './card-design.component.html',
  styleUrls: ['./card-design.component.scss']
})
export class CardDesignComponent {
  @Input() public design: MaterialDidatico;

  public openPresentation(id: string): void {
    window.open(`https://editor.trakto.io/presentation/p/${id}`, '_blank');
  }
}
