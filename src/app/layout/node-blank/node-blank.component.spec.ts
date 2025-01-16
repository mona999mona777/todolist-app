import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeBlankComponent } from './node-blank.component';

describe('NodeBlankComponent', () => {
  let component: NodeBlankComponent;
  let fixture: ComponentFixture<NodeBlankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeBlankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodeBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
