import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from './utils/page-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = false;
  loadingText = '';

  constructor(private pageLoaderService: PageLoaderService) {}

  ngOnInit(): void {
    this.pageLoaderService.loading$.subscribe((event) => {
      if (event === 'start') {
        this.loading = true;
        return;
      }
      if (event === 'timeout') {
        this.loadingText = "It's taking longer than expected!";
        return;
      }
      if (event === 'end') {
        this.loading = false;
        this.loadingText = '';
        return;
      }
    });
  }
}
