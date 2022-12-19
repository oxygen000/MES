import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterThemeComponent } from './master-theme.component';

describe('MasterThemeComponent', () => {
  let component: MasterThemeComponent;
  let fixture: ComponentFixture<MasterThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
