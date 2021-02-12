import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from "../../models/Post";


@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  @Input()
  user: User;
  posts: Post[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(() => {
      this.user = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({postData}) => {
      console.log(postData);
      this.posts = postData
    });
  }
}
