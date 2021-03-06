import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Project } from './project';
import { ProjectInfo } from './project-info/project-info.component';
import { PROJECT_ROUTES } from '../project/project.routes';
//import {Layout} from '../layout/layout.component';
//import {LayoutModule} from '../layout/layout.module';

@NgModule({
    imports: [
        CommonModule
        , FormsModule
        , ReactiveFormsModule
        , RouterModule
        //, LayoutModule        
    ],
    declarations: [
        Project
        , ProjectInfo
    ]

})
export class ProjectModule { }