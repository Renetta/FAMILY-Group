import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FghomeComponent } from './fghome.component';

describe('FghomeComponent', () => {
  let component: FghomeComponent;
  let fixture: ComponentFixture<FghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
