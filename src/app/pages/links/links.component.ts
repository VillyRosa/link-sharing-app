import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { Link } from '../../models/Link';
import { LinksService } from '../../services/links.service';
import { LinkFormComponent } from '../../components/link-form/link-form.component';

@Component({
  selector: 'app-links',
  imports: [LinkFormComponent, ButtonComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent implements OnInit {
  private linksService = inject(LinksService);
  public links: Link[] = [];

  public ngOnInit(): void {
    this.links = this.linksService.getAll();
  }

  public addLink(): void {
    this.links.push({ 
      id: 0,
      platform: {
        id: 0,
        name: '',
        color: ''
      },
      url: ''
     });
  }
}
