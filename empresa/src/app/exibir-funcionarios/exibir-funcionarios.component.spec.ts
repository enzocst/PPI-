import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirFuncionariosComponent } from './exibir-funcionarios.component';

describe('ExibirFuncionariosComponent', () => {
  let component: ExibirFuncionariosComponent;
  let fixture: ComponentFixture<ExibirFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibirFuncionariosComponent]
    });
    fixture = TestBed.createComponent(ExibirFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
