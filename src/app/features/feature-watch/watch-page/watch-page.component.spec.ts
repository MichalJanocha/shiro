import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WatchPageComponent } from './watch-page.component';

describe('WatchPageComponent', () => {
  let component: WatchPageComponent;
  let fixture: ComponentFixture<WatchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});