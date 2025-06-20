import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devs } from './devs';

describe('Devs', () => {
  let component: Devs;
  let fixture: ComponentFixture<Devs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Devs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
