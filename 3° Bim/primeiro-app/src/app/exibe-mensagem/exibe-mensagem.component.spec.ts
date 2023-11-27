import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeMensagemComponent } from './exibe-mensagem.component';

describe('ExibeMensagemComponent', () => {
  let component: ExibeMensagemComponent;
  let fixture: ComponentFixture<ExibeMensagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibeMensagemComponent]
    });
    fixture = TestBed.createComponent(ExibeMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
