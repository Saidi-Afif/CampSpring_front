import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  idProvider:any
  providers:any

  public titre:string="Ajout nouveau Article";
  imgPlus:string="https://img.freepik.com/icones-gratuites/bouton-ajouter_318-757580.jpg"
  constructor(private service: ArticleService, private router: Router, private providerservice:ProviderService) { }

  ngOnInit() {
    this.providerservice.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );
  }

  persistArticle(idProvider:any, article:any)
  {
    this.service.createArticle(idProvider,article).subscribe(data => {this.router.navigate(["listArticle"])});
  }
}
