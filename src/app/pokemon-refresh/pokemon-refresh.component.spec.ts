import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonRefreshComponent } from './pokemon-refresh.component';

describe('PokemonRefreshComponent', () => {
  let component: PokemonRefreshComponent;
  let fixture: ComponentFixture<PokemonRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonRefreshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
