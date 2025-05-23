import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-preview-nav',
  imports: [ButtonComponent, RouterModule],
  templateUrl: './preview-nav.component.html',
  styleUrl: './preview-nav.component.scss'
})
export class PreviewNavComponent {

}
