import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraProdutosComponent } from './mostra-produtos.component';

describe('MostraProdutosComponent', () => {
  let component: MostraProdutosComponent;
  let fixture: ComponentFixture<MostraProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostraProdutosComponent]
    });
    fixture = TestBed.createComponent(MostraProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
