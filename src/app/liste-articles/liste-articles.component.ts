import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent {

  articles: any;
  constructor(private service: ArticleService, private router: Router) { }
  ngOnInit() {
    this.service.listArticles().subscribe(
      response => {
        console.log(response)

        this.articles = response;

      }
    );
  }

  deleteArticle(id: any) {
    //console.log(this.provider);
    this.service.deleteArticle(id).subscribe(response => {
      console.log(response);
      this.refreshListArticles();
    })
  }
  refreshListArticles() {
    this.service.listArticles().subscribe(
      response => {
        console.log(response)
        this.articles = response;
      }
    );
  }

  updateArticle(idProvider:any,idArticle:any,article:any) {
    this.router.navigate(['updateArticle/' +idProvider+'/' +idArticle,article]);
  }

}
