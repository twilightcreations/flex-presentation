import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BasicConstructsComponent } from './basic-constructs/basic-constructs.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { StickyFooterComponent } from './sticky-footer/sticky-footer.component';
import { HoldingPageComponent } from './holding-page/holding-page.component';
import { FlexSlidePageComponent } from './flex-slide-page/flex-slide-page.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ClickEventComponent } from './click-event/click-event.component';
import { FormElementsComponent } from './form-elements/form-elements.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicConstructsComponent,
    HomeComponent,
    LoginPageComponent,
    ImageGalleryComponent,
    StickyFooterComponent,
    HoldingPageComponent,
    FlexSlidePageComponent,
    SingleProductComponent,
    ProductListComponent,
    MainMenuComponent,
    ClickEventComponent,
    FormElementsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'basic-constructs', component: BasicConstructsComponent },
      { path: 'login-page', component: LoginPageComponent },
      { path: 'image-gallery', component: ImageGalleryComponent },
      { path: 'sticky-footer', component: StickyFooterComponent },
      { path: 'holding-page', component: HoldingPageComponent },
      { path: 'flex-slide-page', component: FlexSlidePageComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'main-menu', component: MainMenuComponent },
      { path: 'click-event', component: ClickEventComponent },
      { path: 'form-elements', component: FormElementsComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
