import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhycaptainxComponent } from './whycaptainx.component';

describe('WhycaptainxComponent', () => {
  let component: WhycaptainxComponent;
  let fixture: ComponentFixture<WhycaptainxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhycaptainxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhycaptainxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
