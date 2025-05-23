import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewNavComponent } from './preview-nav.component';

describe('PreviewNavComponent', () => {
  let component: PreviewNavComponent;
  let fixture: ComponentFixture<PreviewNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
