import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsTvComponent } from './actors-tv.component';

describe('ActorsTvComponent', () => {
  let component: ActorsTvComponent;
  let fixture: ComponentFixture<ActorsTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorsTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
