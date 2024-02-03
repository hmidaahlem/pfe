import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"socialmedia", loadChildren:()=> import('./social-media/social-media.module').then(m => m.SocialMediaModule) },
{ path: '**', redirectTo: 'socialmedia'},{ path: 'complex-form', loadChildren: () => import('./complex-form/complex-form.module').then(m => m.ComplexFormModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
