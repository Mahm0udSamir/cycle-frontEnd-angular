import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemveBikeComponent } from './remve-bike.component';

describe('RemveBikeComponent', () => {
  let component: RemveBikeComponent;
  let fixture: ComponentFixture<RemveBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemveBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemveBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
