import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '@components/nav/nav.component';
import { PreviewPanelComponent } from '@components/preview-panel/preview-panel.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavComponent, PreviewPanelComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
