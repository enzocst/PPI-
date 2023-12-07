import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaProdutosComponent } from './busca-produtos.component';

describe('BuscaProdutosComponent', () => {
  let component: BuscaProdutosComponent;
  let fixture: ComponentFixture<BuscaProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaProdutosComponent]
    });
    fixture = TestBed.createComponent(BuscaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
