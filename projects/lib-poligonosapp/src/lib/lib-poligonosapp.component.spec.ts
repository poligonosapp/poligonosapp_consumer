import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibPoligonosappComponent } from './lib-poligonosapp.component';

describe('LibPoligonosappComponent', () => {
  let component: LibPoligonosappComponent;
  let fixture: ComponentFixture<LibPoligonosappComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibPoligonosappComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibPoligonosappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
