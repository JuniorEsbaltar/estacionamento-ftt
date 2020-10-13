import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGaragemComponent } from './lista-garagem.component';

describe('ListaGaragemComponent', () => {
  let component: ListaGaragemComponent;
  let fixture: ComponentFixture<ListaGaragemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaGaragemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGaragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
