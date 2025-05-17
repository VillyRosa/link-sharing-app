import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { PreviewPanelComponent } from "../../components/preview-panel/preview-panel.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavComponent, PreviewPanelComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
