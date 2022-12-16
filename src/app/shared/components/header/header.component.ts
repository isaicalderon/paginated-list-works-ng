import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public spinnerVisible = false;

  constructor(
    private _spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this._spinnerService.isLoading.subscribe((res: boolean) => {
      this.spinnerVisible = res;
    });
  }

  ngOnDestroy(): void {
    this._spinnerService.isLoading.unsubscribe();
  }
}
