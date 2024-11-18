import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecupcakeComponent } from './onecupcake.component';

describe('OnecupcakeComponent', () => {
  let component: OnecupcakeComponent;
  let fixture: ComponentFixture<OnecupcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnecupcakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnecupcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
