import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaritemsdialogComponent } from './navbaritemsdialog.component';

describe('NavbaritemsdialogComponent', () => {
  let component: NavbaritemsdialogComponent;
  let fixture: ComponentFixture<NavbaritemsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaritemsdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaritemsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
