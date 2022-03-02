import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EjemploScrollInfinitoPage } from './ejemplo-scroll-infinito.page';

describe('EjemploScrollInfinitoPage', () => {
  let component: EjemploScrollInfinitoPage;
  let fixture: ComponentFixture<EjemploScrollInfinitoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploScrollInfinitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploScrollInfinitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
