import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsViewPage } from './details-view.page';

describe('DetailsViewPage', () => {
  let component: DetailsViewPage;
  let fixture: ComponentFixture<DetailsViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
