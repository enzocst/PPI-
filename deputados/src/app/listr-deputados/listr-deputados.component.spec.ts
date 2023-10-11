import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrDeputadosComponent } from './listr-deputados.component';

describe('ListrDeputadosComponent', () => {
  let component: ListrDeputadosComponent;
  let fixture: ComponentFixture<ListrDeputadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListrDeputadosComponent]
    });
    fixture = TestBed.createComponent(ListrDeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
