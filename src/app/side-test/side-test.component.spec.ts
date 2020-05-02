import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideTestComponent } from './side-test.component';

describe('SideTestComponent', () => {
  let component: SideTestComponent;
  let fixture: ComponentFixture<SideTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
