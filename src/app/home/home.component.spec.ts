import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start loader and navigate to dashboard after 5 seconds', () => {
    spyOn(router, 'navigate').and.stub();

    component.startLoader();

    // After 5 seconds, loader should be hidden and navigation to dashboard should occur
    setTimeout(() => {
      expect(component.showLoader).toBeFalsy();
      expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
    }, 5000);
  });
});
