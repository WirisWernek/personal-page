import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'home',
		title: 'Wiris Wernek',
		loadChildren: () => import('./page/page.module').then(m => m.PageModule)
	},	
	{ 	path: '**', 
		redirectTo: "home" 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
