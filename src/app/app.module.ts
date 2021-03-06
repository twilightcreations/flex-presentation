import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { SlideInMenuComponent } from './slide-in-menu/slide-in-menu.component';
import { SlideMenuContentsComponent } from './slide-menu-contents/slide-menu-contents.component';
import { MenuFlexComponent } from './menu-flex/menu-flex.component';
import { SimpleDataComponent } from './simple-data/simple-data.component';
import { MultiItemClassToggleComponent } from './multi-item-class-toggle/multi-item-class-toggle.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { TodoItemComponent } from './to-do-list/todo-item/todo-item.component';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { SimpleServiceComponent } from './simple-service/simple-service.component';
import { ParentChildDataflowSimpleComponent } from './parent-child-dataflow-simple/parent-child-dataflow-simple.component';
import { ChildElementComponent } from './parent-child-dataflow-simple/child-element/child-element.component';
import { UsingNgModelComponent } from './using-ng-model/using-ng-model.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { ChildComponent } from './two-way-data/child/child.component';
import { SimpleService } from './simple-service/simple.service';
import { CssGridLionComponent } from './css-grid-lion/css-grid-lion.component';
import { NewsItemsComponent } from './news-items/news-items.component';
import { NewsComponent } from './news-items/news/news.component';
import { ReadNewsComponent } from './news-items/read-news/read-news.component';


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
    FormElementsComponent,
    VideoBackgroundComponent,
    SlideInMenuComponent,
    SlideMenuContentsComponent,
    MenuFlexComponent,
    SimpleDataComponent,
    MultiItemClassToggleComponent,
    ToDoListComponent,
    TodoItemComponent,
    PreLoaderComponent,
    SimpleServiceComponent,
    ParentChildDataflowSimpleComponent,
    ChildElementComponent,
    UsingNgModelComponent,
    TwoWayDataComponent,
    ChildComponent,
    CssGridLionComponent,
    NewsItemsComponent,
    NewsComponent,
    ReadNewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
      { path: 'video-background', component: VideoBackgroundComponent },
      { path: 'slide-in-menu', component: SlideInMenuComponent },
      { path: 'menu-flex', component: MenuFlexComponent },
      { path: 'simple-data', component: SimpleDataComponent },
      { path: 'multi-item-class-toggle', component: MultiItemClassToggleComponent },
      { path: 'to-do-list', component: ToDoListComponent },
      { path: 'simple-service', component:SimpleServiceComponent },
      { path: 'using-ng-model', component:UsingNgModelComponent },
      { path: 'cssGridLion', component:CssGridLionComponent },
      { path: 'news-items', component:NewsItemsComponent },
      { path: 'parent-child-dataflow-simple', component:ParentChildDataflowSimpleComponent },
      // this is a lazy loaded module i.e a file loaded when user navigates to to-do-list2 url
      // This is a way to create a sub feature in an application to improve performance (by reducing the initial bundle)
      // Also, it give encapsulation of keeping related functionality in that module
      { path: 'to-do-list2', loadChildren: './to-do-list2/to-do-list2.module#ToDoList2Module' },
      { path: 'two-way-data', component: TwoWayDataComponent },
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [
    SimpleServiceComponent,
    SimpleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
