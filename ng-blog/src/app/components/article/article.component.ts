import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import {ActivatedRoute, Router} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { ARTICLES } from 'src/app/mock-articles';
import { ArticleService } from 'src/app/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = new Article();
    constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private router :Router,
    ) { }

  ngOnInit() {
this.route.params.subscribe(params => {
  const key = params.key;
  this.articleService.getArticle(key).subscribe(article => {
    if( article === undefined){
      this.router.navigateByUrl('404');
      return ;
    }
    this.article = article;
  })  

} );
}

}