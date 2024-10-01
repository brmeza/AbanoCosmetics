import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectInfoComponent } from './sect-info.component';

describe('SectInfoComponent', () => {
  let component: SectInfoComponent;
  let fixture: ComponentFixture<SectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
