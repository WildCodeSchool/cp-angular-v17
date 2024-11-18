import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakePageComponent } from './cupcake-page.component';

describe('CupcakePageComponent', () => {
  let component: CupcakePageComponent;
  let fixture: ComponentFixture<CupcakePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CupcakePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CupcakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
