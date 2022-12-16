import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorksService } from '../../shared/services/works.service';


@Component({
  selector: 'app-works-view',
  templateUrl: './works-view.component.html',
  styleUrls: ['./works-view.component.scss']
})
export class WorksViewComponent implements OnInit {

  public doi: string;
  public message: any = {};

  public panelOpenState: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _worksService: WorksService
  ) {  }

  ngOnInit(): void {
    this.doi = atob(this.route.snapshot.paramMap.get('DOI')+"");
    if (this.doi == "") {
      this._router.navigate(['/list']);
    }

    this._worksService.getByDOI(this.doi).subscribe(res => {
      this.message = res.message;
    });
  }

}
