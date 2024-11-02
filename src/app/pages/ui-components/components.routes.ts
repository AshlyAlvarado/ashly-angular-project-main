import { Routes } from '@angular/router';

import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppFormsComponent } from './forms/forms.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { PlanningComponent } from './planning/planning.component';
import { AppTablesComponent } from './tables/tables.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';

// ui
export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'planning',
        component: PlanningComponent,
      },
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
      {
        path: 'forms',
        component: AppFormsComponent,
      },
      {
        path: 'tables',
        component: AppTablesComponent,
      },
    ],
  },
];
