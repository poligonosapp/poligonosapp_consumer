import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolygonHTMLElementTypeScriptComponent } from './polygon-htmlelement-type-script.component';

describe('PolygonHTMLElementTypeScriptComponent', () => {
  let component: PolygonHTMLElementTypeScriptComponent;
  let fixture: ComponentFixture<PolygonHTMLElementTypeScriptComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonHTMLElementTypeScriptComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolygonHTMLElementTypeScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
