import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Figura3dComponent } from './figura3d.component';

describe('Figura3dComponent', () => {
  let component: Figura3dComponent;
  let fixture: ComponentFixture<Figura3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Figura3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Figura3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
