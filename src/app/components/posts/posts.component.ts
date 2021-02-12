import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  posts: Post[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
