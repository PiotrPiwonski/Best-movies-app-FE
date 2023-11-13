import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './pages/movies/movies.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {CategoriesComponent} from './pages/categories/categories.component';

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
