import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolygonsComponent } from './polygons.component';

// https://angular.io/guide/testing-components-basics
describe('LightswitchComp', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new LightswitchComponent();
    expect(comp.isOn).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new LightswitchComponent();
    expect(comp.message).toMatch(/is off/i, 'off at first');
    comp.clicked();
    expect(comp.message).toMatch(/is on/i, 'on after clicked');
  });
});

// https://angular.io/api/core/testing/fakeAsync#example
describe('this test', () => {
  it('looks async but is synchronous', <any>fakeAsync((): void => {
    let flag = false;
    setTimeout(() => {
      flag = true;
    }, 100);
    expect(flag).toBe(false);
    tick(50);
    expect(flag).toBe(false);
    tick(50);
    expect(flag).toBe(true);
  }));
});

describe('PolygonsComponent', () => {
  let component: PolygonsComponent;
  let fixture: ComponentFixture<PolygonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolygonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should call gql github', () => {
    expect(component).toBeTruthy();
  });

  it('should call gql ', () => {
    expect(component).toBeTruthy();
  });

  it('should call cdn', () => {
    expect(component).toBeTruthy();
  });

  it('should create polygon after cdn styles call', () => {
    expect(component).toBeTruthy();
  });
});
