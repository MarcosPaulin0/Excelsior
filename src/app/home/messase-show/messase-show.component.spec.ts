import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaseShowComponent } from './messase-show.component';

describe('MessaseShowComponent', () => {
  let component: MessaseShowComponent;
  let fixture: ComponentFixture<MessaseShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessaseShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessaseShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
