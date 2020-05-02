import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FaqComponent } from './faq/faq.component';
import { LegalityComponent } from './legality/legality.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LinkFormComponent } from './link-form/link-form.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SideTestComponent } from './side-test/side-test.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LevelComponent } from './level/level.component';
import { GiftsComponent } from './gifts/gifts.component';
import { BonusComponent } from './bonus/bonus.component';
import { RankingComponent } from './ranking/ranking.component';
import { WhycaptainxComponent } from './whycaptainx/whycaptainx.component';
import { UserguideComponent } from './userguide/userguide.component';
import { MaintainanceComponent } from './maintainance/maintainance.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    TermsComponent,
    PrivacyComponent,
    FaqComponent,
    LegalityComponent,
    ContactUsComponent,
    LinkFormComponent,
    SpinnerComponent,
    SideTestComponent,
    LevelComponent,
    GiftsComponent,
    BonusComponent,
    RankingComponent,
    WhycaptainxComponent,
    UserguideComponent,
    MaintainanceComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
