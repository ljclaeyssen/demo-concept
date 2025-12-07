import { Pipe, PipeTransform } from '@angular/core';
import { PresentationType } from '../models/presentation.model';

@Pipe({
  name: 'presentationTypeLabel'
})
export class PresentationTypeLabelPipe implements PipeTransform {
  transform(type: PresentationType): string {
    switch (type) {
      case PresentationType.PRO: return 'Pro';
      case PresentationType.LOCAL: return 'Local';
      case PresentationType.WIP: return 'WIP';
      case PresentationType.SCHOOL: return 'School';
    }
  }
}
