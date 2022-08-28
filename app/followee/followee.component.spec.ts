import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolloweeComponent } from './followee.component';

describe('FolloweeComponent', () => {
  let component: FolloweeComponent;
  let fixture: ComponentFixture<FolloweeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolloweeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolloweeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
