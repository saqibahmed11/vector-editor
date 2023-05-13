import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgrCanvasComponent } from './vgr-canvas.component';

describe('VgrCanvasComponent', () => {
  let component: VgrCanvasComponent;
  let fixture: ComponentFixture<VgrCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VgrCanvasComponent]
    });
    fixture = TestBed.createComponent(VgrCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
