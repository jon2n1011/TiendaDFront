import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncriptacionJCBComponent } from './encriptacion-jcb.component';

describe('EncriptacionJCBComponent', () => {
  let component: EncriptacionJCBComponent;
  let fixture: ComponentFixture<EncriptacionJCBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncriptacionJCBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncriptacionJCBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
