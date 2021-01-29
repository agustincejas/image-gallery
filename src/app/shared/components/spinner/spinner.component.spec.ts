import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#show should change isLoading to true', () => {
    component.show();

    expect(component.isLoading).toEqual(true);
  });

  it('#hide should change isLoading to false', () => {
    component.hide();

    expect(component.isLoading).toEqual(false);
  });
});
