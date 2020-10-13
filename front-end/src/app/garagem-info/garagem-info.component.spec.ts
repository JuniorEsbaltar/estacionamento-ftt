import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragemInfoComponent } from './garagem-info.component';

describe('GaragemInfoComponent', () => {
  let component: GaragemInfoComponent;
  let fixture: ComponentFixture<GaragemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
