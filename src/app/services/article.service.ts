import { HttpClient } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  

  urlArticles = 'http://127.0.0.1:8080/articles/';


  constructor(private Http: HttpClient) { }
  listArticles() {
    return this.Http.get(this.urlArticles + "list");
  }

  deleteArticle(idArticle: any) {
    return this.Http.delete(this.urlArticles + "delete/"+ idArticle)
  }
  updateArticle(idProvider:any,idArticle:any,article: any) {
     return this.Http.put(this.urlArticles +"update/"+ idProvider+"/"+idArticle, article);
   }


   createArticle( idProvider:any, article: any) {
    return this.Http.post(this.urlArticles +"add/"+ idProvider, article);
  }


  getArticle(id:any) {
    return this.Http.get(this.urlArticles + id)
  }

}
