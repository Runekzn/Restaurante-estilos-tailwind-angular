import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginverdaderoComponent } from './loginverdadero.component';

describe('LoginverdaderoComponent', () => {
  let component: LoginverdaderoComponent;
  let fixture: ComponentFixture<LoginverdaderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginverdaderoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginverdaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
