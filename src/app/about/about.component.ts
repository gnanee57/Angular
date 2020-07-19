import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../Shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInout]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  
  leaders: Leader[];
  leaderErrMess: string;

  constructor(private leaderservice: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit(): void {
    this.leaderservice.getLeaders().subscribe((leaders) => this.leaders = leaders,
    leaderErrMess => this.leaderErrMess = <any>leaderErrMess);
  }

}
