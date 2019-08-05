import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChoicesComponent } from './menu-choices.component';

describe('MenuChoicesComponent', () => {
  let component: MenuChoicesComponent;
  let fixture: ComponentFixture<MenuChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
