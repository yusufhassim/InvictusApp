import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'all-write-off-stock', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'add-write-off-stock', loadChildren: './pages/add-write-off-stock/add-write-off-stock.module#AddWriteOffStockPageModule' },
  { path: 'all-write-off-stock', loadChildren: './pages/all-write-off-stock/all-write-off-stock.module#AllWriteOffStockPageModule' },
  // { path: 'writeoffphoto', loadChildren: './pages/writeoffphoto/writeoffphoto.module#WriteoffphotoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }




