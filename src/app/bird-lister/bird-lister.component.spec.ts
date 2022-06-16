import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdListerComponent } from './bird-lister.component';

describe('BirdListerComponent', () => {
  let component: BirdListerComponent;
  let fixture: ComponentFixture<BirdListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdListerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
