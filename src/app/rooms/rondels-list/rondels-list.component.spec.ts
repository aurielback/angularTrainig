import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondelsListComponent } from './rondels-list.component';

describe('RondelsListComponent', () => {
  let component: RondelsListComponent;
  let fixture: ComponentFixture<RondelsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RondelsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RondelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
