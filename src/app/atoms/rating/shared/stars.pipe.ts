import { Pipe, PipeTransform } from '@angular/core';
import { Star, StarService } from './star.service';

@Pipe({
  name: 'stars',
})
export class StarsPipe implements PipeTransform {
  constructor(private starService: StarService) {}

  transform(rate: number): Star[] {
    return this.starService.createStars(rate);
  }
}
