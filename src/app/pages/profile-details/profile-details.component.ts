import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from "../../components/input/input.component";
import { InputPhotoComponent } from '../../components/input-photo/input-photo.component';

@Component({
  selector: 'app-profile-details',
  imports: [ButtonComponent, InputComponent, InputPhotoComponent],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent {

}
