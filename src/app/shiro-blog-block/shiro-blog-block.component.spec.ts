import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiroBlogBlockComponent } from './shiro-blog-block.component';

describe('ShiroBlogBlockComponent', () => {
  let component: ShiroBlogBlockComponent;
  let fixture: ComponentFixture<ShiroBlogBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiroBlogBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiroBlogBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
