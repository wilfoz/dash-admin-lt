import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { fadeInOut, INavbarData, rotate } from './helper';
import { navbarData } from './nav-data';
import { SublevelMenuComponent } from './sublevel-menu.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, SublevelMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    fadeInOut,
    rotate,
  ]
})
export class SidenavComponent implements OnInit {


  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: INavbarData): void {
    if(!this.multiple) {
      for(let modelItem of this.navData) {
        if(item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
