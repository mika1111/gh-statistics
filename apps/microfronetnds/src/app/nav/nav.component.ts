import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {AsyncPipe} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    AsyncPipe,
    MatToolbar,
    MatNavList,
    MatIcon,
    RouterLink,
    MatListItem,
    MatIconButton,
  ],
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
