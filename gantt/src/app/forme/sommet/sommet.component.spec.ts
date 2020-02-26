import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SommetComponent } from './sommet.component';

describe('SommetComponent', () => {
  let component: SommetComponent;
  let fixture: ComponentFixture<SommetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SommetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SommetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
