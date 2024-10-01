import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectSubsComponent } from './sect-subs.component';

describe('SectSubsComponent', () => {
  let component: SectSubsComponent;
  let fixture: ComponentFixture<SectSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectSubsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
