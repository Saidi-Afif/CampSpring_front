import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {
  id:any;
  label:any;
  price:any;
  picture:any;
  idProvider:any
  providers: any;
  idArticle:any
  
  constructor(private service: ArticleService,private providerservice:ProviderService, private router: Router, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {

    this.providerservice.listProviders().subscribe(
      response => {
        this.providers = response;
      }
    );

    this.activeRoute.paramMap.subscribe(
      params => {
        this.id = params.get('idArticle');
        this.idProvider = params.get('idProvider')
    });

    this.service.getArticle(this.id).subscribe(
      (article:any)=>{
                      this.label=article.label;
                      this.price = article.price;
                      this.picture = article.picture;
                    }
    );
  }


  updateArticle()
  {

    let article={
      "id":this.id,
      "idProvider":this.idProvider,
      "label":this.label,
      "price":this.price,
      "picture":this.picture
    };
    this.service.updateArticle(this.idProvider,this.id,article).subscribe(
         data =>this.router.navigate(["listArticle"])
    );
  }
  
}
