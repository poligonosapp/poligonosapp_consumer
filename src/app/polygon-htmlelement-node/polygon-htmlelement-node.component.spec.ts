import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolygonHTMLElementNodeComponent } from './polygon-htmlelement-node.component';

describe('PolygonHTMLElementNodeComponent', () => {
  let component: PolygonHTMLElementNodeComponent;
  let fixture: ComponentFixture<PolygonHTMLElementNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonHTMLElementNodeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolygonHTMLElementNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
