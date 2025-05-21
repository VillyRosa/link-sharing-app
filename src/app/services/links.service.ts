import { Injectable } from '@angular/core';
import { Link } from '@models/Link';
import { NewLink } from '@models/NewLink';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private readonly LINKS_KEY = 'links';

  public getAll(): Link[] {
    return JSON.parse(localStorage.getItem(this.LINKS_KEY) || '[]');
  }

  public getById(id: number): Link | undefined {
    return this.getAll().find(link => link.id === id);
  }

  public save(link: NewLink): void {
    const allLinks = this.getAll();
    const nextId = allLinks.length > 0 ? allLinks[allLinks.length - 1].id + 1 : 1;

    const newLink: Link = {
      id: nextId,
      ...link
    };

    allLinks.push(newLink);
    localStorage.setItem(this.LINKS_KEY, JSON.stringify(allLinks));
  }

  public update(link: Link): void {
    const allLinks = this.getAll();
    const filteredLinks = allLinks.filter(existingLink => existingLink.id !== link.id);
    filteredLinks.push(link);
    localStorage.setItem(this.LINKS_KEY, JSON.stringify(filteredLinks));
  }

  public delete(id: number): void {
    const allLinks = this.getAll();
    const filteredLinks = allLinks.filter(link => link.id !== id);
    localStorage.setItem(this.LINKS_KEY, JSON.stringify(filteredLinks));
  }
}
