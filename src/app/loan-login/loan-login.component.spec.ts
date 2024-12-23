import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLoginComponent } from './loan-login.component';

describe('LoanLoginComponent', () => {
  let component: LoanLoginComponent;
  let fixture: ComponentFixture<LoanLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
