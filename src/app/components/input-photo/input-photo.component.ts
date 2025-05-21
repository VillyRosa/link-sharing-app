import { Component, Input } from '@angular/core';
import { SvgInlineComponent } from '@components/svg-inline/svg-inline.component';

@Component({
  selector: 'app-input-photo',
  imports: [SvgInlineComponent],
  templateUrl: './input-photo.component.html',
  styleUrl: './input-photo.component.scss'
})
export class InputPhotoComponent {
  public selectedFile: File | null = null;
  public imagePreview: string | ArrayBuffer | null = null;

  @Input() label: string = '';
  @Input() name: string = '';

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
