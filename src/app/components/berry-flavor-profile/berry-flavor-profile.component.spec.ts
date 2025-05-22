import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BerryFlavorProfileComponent } from './berry-flavor-profile.component';

describe('BerryFlavorProfileComponent', () => {
  let component: BerryFlavorProfileComponent;
  let fixture: ComponentFixture<BerryFlavorProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BerryFlavorProfileComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BerryFlavorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
