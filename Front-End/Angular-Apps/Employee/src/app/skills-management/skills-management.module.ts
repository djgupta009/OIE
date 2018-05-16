import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';

import { SkillsManagementComponent } from './skills-management.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { SkillsListComponent } from './skills-list/skills-list.component';

import { UpdateSkillComponent } from './update-skill/update-skill.component';
import { FilterListPipe } from './skills-list/filter-list.pipe';

const route: Routes = [
    { path: 'skillmanagement', children:[
        { path: '', component: SkillsManagementComponent },
        { path: 'skilllist', component: SkillsListComponent },
        { path: 'addskill', component: AddSkillComponent },
        { path: 'updateskill/:id', component: UpdateSkillComponent}
      ]}
]

@NgModule({
    declarations: [
        SkillsManagementComponent,
        AddSkillComponent,
        SkillsListComponent,
        UpdateSkillComponent,
        FilterListPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PaginatorModule,
        RouterModule.forRoot(route)
    ],
    exports: [
        RouterModule
    ]

})

export class SkillsManagementModule{}