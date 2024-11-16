import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarzdzienComponent } from './kalendarzdzien.component';

describe('KalendarzdzienComponent', () => {
  let component: KalendarzdzienComponent;
  let fixture: ComponentFixture<KalendarzdzienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KalendarzdzienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalendarzdzienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
