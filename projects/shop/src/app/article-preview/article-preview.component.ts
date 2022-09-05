import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shp-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() isLeftSideArticle = true;
  @Input() image = "";
  @Input() header = "";
  @Input() price = 499;

  constructor() { }

  ngOnInit(): void {
  }

}
