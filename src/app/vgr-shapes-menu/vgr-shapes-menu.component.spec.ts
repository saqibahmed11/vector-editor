import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgrShapesMenuComponent } from './vgr-shapes-menu.component';

describe('VgrShapesMenuComponent', () => {
  let component: VgrShapesMenuComponent;
  let fixture: ComponentFixture<VgrShapesMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VgrShapesMenuComponent]
    });
    fixture = TestBed.createComponent(VgrShapesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
