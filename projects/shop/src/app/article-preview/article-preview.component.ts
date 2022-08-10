import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shp-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() isLeftSideArticle = true;

  constructor() { }

  ngOnInit(): void {
  }

}
