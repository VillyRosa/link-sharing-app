import { Component, ElementRef, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { SvgInlineComponent } from '@components/svg-inline/svg-inline.component';
import { SelectOption } from '@models/SelectOption';

@Component({
  selector: 'app-select',
  imports: [SvgInlineComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  private elementRef = inject(ElementRef);
  public isOpen: boolean = false;
  
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() options: SelectOption[] = [];
  @Input() selectedValue: string = '';
  @Output() selectedValueChange = new EventEmitter<string>();

  public toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  public selectOption(value: string) {
    this.selectedValue = value;
    this.selectedValueChange.emit(value);
    this.isOpen = false;
  }

  public getSelectedOption(): SelectOption | undefined {
    return this.options.find(option => option.value === this.selectedValue);
  }

  @HostListener('document:click', ['$event'])
  public onClickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
