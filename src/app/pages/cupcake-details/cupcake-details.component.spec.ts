import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeDetailsComponent } from './cupcake-details.component';

describe('CupcakeDetailsComponent', () => {
  let component: CupcakeDetailsComponent;
  let fixture: ComponentFixture<CupcakeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CupcakeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CupcakeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
