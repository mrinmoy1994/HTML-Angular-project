import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LegalityComponent } from './legality/legality.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SideTestComponent } from './side-test/side-test.component';
import { LevelComponent } from './level/level.component';
import { BonusComponent } from './bonus/bonus.component';
import { RankingComponent } from './ranking/ranking.component';
import { WhycaptainxComponent } from './whycaptainx/whycaptainx.component';
import { UserguideComponent } from './userguide/userguide.component';
import { GiftsComponent } from './gifts/gifts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'legality', component: LegalityComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'side', component: SideTestComponent },
  { path: 'level', component: LevelComponent },
  { path: 'bonus', component: BonusComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'whycaptainx', component: WhycaptainxComponent },
  { path: 'userguide', component: UserguideComponent },
  { path: 'gifts', component: GiftsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'top'} ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
