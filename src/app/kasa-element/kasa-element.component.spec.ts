import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasaElementComponent } from './kasa-element.component';

describe('KasaElementComponent', () => {
  let component: KasaElementComponent;
  let fixture: ComponentFixture<KasaElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KasaElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KasaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
