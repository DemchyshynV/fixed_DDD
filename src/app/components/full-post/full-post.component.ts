import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit{
@Input()
  post: Post;

  constructor() {
  }

  ngOnInit(): void {
  }

}
