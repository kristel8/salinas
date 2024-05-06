import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;

  beforeEach(() => {
    component = new LoaderComponent();
    component.images = ['image1.jpg', 'image2.jpg'];
    component.texts = ['Text 1', 'Text 2'];
    component.interval = 2000;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with first image and text', () => {
    expect(component.getCurrentImage()).toBe('image1.jpg');
    expect(component.getCurrentText()).toBe('Text 1');
  });

  it('should change image and text after interval', () => {
    jasmine.clock().install();

    component.ngOnInit();

    jasmine.clock().tick(2000); // Avanzar el reloj en 2 segundos

    expect(component.getCurrentImage()).toBe('image2.jpg');
    expect(component.getCurrentText()).toBe('Text 2');

    jasmine.clock().uninstall();
  });
});
