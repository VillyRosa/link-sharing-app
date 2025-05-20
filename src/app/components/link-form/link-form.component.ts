import { Component, Input } from '@angular/core';
import { Link } from '../../models/Link';
import { SvgInlineComponent } from "../svg-inline/svg-inline.component";
import { InputComponent } from '../input/input.component';
import { SelectComponent } from "../select/select.component";
import { SelectOption } from '../../models/SelectOption';

@Component({
  selector: 'app-link-form',
  imports: [SvgInlineComponent, InputComponent, SelectComponent],
  templateUrl: './link-form.component.html',
  styleUrl: './link-form.component.scss'
})
export class LinkFormComponent {
  public platformsOptions: SelectOption[] = [
    { label: 'GitHub', value: 'github', icon: './images/svg/icon-github.svg' },
    { label: 'GitLab', value: 'gitlab', icon: './images/svg/icon-gitlab.svg' },
    { label: 'Code Pen', value: 'codepen', icon: './images/svg/icon-codepen.svg' },
    { label: 'Code Wars', value: 'codewars', icon: './images/svg/icon-codewars.svg' },
    { label: 'YouTube', value: 'youtube', icon: './images/svg/icon-youtube.svg' },
    { label: 'Email', value: 'email', icon: './images/svg/icon-email.svg' },
    { label: 'Frontend Mentor', value: 'frontend-mentor', icon: './images/svg/icon-frontend-mentor.svg' },
    { label: 'Free Code Camp', value: 'freecodecamp', icon: './images/svg/icon-freecodecamp.svg' },
    { label: 'Hashnode', value: 'hashnode', icon: './images/svg/icon-hashnode.svg' },
    { label: 'Facebook', value: 'facebook', icon: './images/svg/icon-facebook.svg' },
    { label: 'Linkedin', value: 'linkedin', icon: './images/svg/icon-linkedin.svg' },
    { label: 'Twitch', value: 'twitch', icon: './images/svg/icon-twitch.svg' },
    { label: 'Twitter', value: 'twitter', icon: './images/svg/icon-twitter.svg' },
  ];

  @Input() link!: Link;
}
