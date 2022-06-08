import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdListingComponent } from './bird-listing.component';

describe('BirdListingComponent', () => {
  let component: BirdListingComponent;
  let fixture: ComponentFixture<BirdListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
