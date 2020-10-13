import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCarroComponent } from './cadastra-carro.component';

describe('CadastraCarroComponent', () => {
  let component: CadastraCarroComponent;
  let fixture: ComponentFixture<CadastraCarroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraCarroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
