import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {
  fdir: string;
  sdir: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fdir = this.route.snapshot.params['fdir'];
    this.sdir = this.route.snapshot.params['sdir'];
    if ( this.fdir === 'home' && this.sdir === 'home' ) {
      console.log(`/${this.fdir}/${this.sdir}`);
      setTimeout(() => {
        this.router.navigate([`/`]);
       }, 1000);
    }else {
      console.log(`/${this.fdir}/${this.sdir}`);
      setTimeout(() => {
        this.router.navigate([`/${this.fdir}/${this.sdir}`])
      }, 500);
    }
  }

}
