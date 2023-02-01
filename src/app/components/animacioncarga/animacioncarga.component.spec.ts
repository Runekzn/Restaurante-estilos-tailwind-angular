import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacioncargaComponent } from './animacioncarga.component';

describe('AnimacioncargaComponent', () => {
  let component: AnimacioncargaComponent;
  let fixture: ComponentFixture<AnimacioncargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimacioncargaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimacioncargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
