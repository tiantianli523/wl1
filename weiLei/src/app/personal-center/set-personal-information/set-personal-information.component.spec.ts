import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPersonalInformationComponent } from './set-personal-information.component';

describe('SetPersonalInformationComponent', () => {
  let component: SetPersonalInformationComponent;
  let fixture: ComponentFixture<SetPersonalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPersonalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
