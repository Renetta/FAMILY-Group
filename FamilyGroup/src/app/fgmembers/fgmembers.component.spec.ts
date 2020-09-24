import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgmembersComponent } from './fgmembers.component';

describe('FgmembersComponent', () => {
  let component: FgmembersComponent;
  let fixture: ComponentFixture<FgmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
