import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, merge, skip, switchMap, tap } from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-resolved',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.scss'],
})
export class ResolvedComponent {
  private service = inject(LoaderService);

  received = 0;

  data$ = merge([
    inject(ActivatedRoute).data.pipe(map(({ loadedData }) => loadedData)),
    this.service.resolvedValues$.pipe(skip(1)),
  ])
  .pipe(
    switchMap(s=>s),
    tap(() => (this.received = this.received + 1))
  );

  retry() {
    this.service.retry();
  }
}
