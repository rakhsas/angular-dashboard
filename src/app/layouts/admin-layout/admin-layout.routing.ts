import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { userComponent } from 'app/test/user.component';
import { departementComponent } from 'app/departement/departement.component';
import { caisseComponent } from 'app/caisse/caisse.component';
import { profileComponent } from 'app/profile/profile.component';
import { WorkflowComponent } from 'app/workflow/workflow.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent  },
    { path: 'userCtrl', component: userComponent  },
    { path: 'departements', component: departementComponent},
    { path: 'caisses', component: caisseComponent},
    { path: 'profiles', component: profileComponent},
    { path: 'workflows', component: WorkflowComponent},

];
