import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListadoPokemonExistentesPage } from './listado-pokemon-existentes.page';

describe('ListadoPokemonExistentesPage', () => {
  let component: ListadoPokemonExistentesPage;
  let fixture: ComponentFixture<ListadoPokemonExistentesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPokemonExistentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoPokemonExistentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
