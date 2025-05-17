import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgInlineComponent } from './svg-inline.component';

describe('SvgInlineComponent', () => {
  let component: SvgInlineComponent;
  let fixture: ComponentFixture<SvgInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgInlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
