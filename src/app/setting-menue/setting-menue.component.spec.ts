import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingMenueComponent } from './setting-menue.component';

describe('SettingMenueComponent', () => {
  let component: SettingMenueComponent;
  let fixture: ComponentFixture<SettingMenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingMenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
