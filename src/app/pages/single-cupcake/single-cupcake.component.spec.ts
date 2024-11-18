import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCupcakeComponent } from './single-cupcake.component';

describe('SingleCupcakeComponent', () => {
  let component: SingleCupcakeComponent;
  let fixture: ComponentFixture<SingleCupcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCupcakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleCupcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
