import { Pipe, PipeTransform } from '@angular/core';
import { SourceResponse } from '../core/entities/news.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(sources: SourceResponse[], term: string): SourceResponse[] {
    if (!term) {
      return sources;
    }
    return sources.filter(source => source.name.toLowerCase().includes(term.toLowerCase()));
  }

}
