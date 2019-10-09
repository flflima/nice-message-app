import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as label 'Informe o seu nome: '`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#name').textContent).toEqual('Informe o seu nome: ');
  });

  // it('should create the app with an empty name field', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.name).toEqual('');
  // });

  it(`should have a disabled button while form is invalid`, async() => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    fixture.detectChanges();

    fixture.debugElement.nativeElement.querySelector('#name-input').value = 'X';
    fixture.debugElement.nativeElement.querySelector('#name-input').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').disabled).toBeTruthy();

  });

  it(`should have an enabled button when form is valid`, async() => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#name-input').value = 'Jose';
    compiled.querySelector('#name-input').dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(compiled.querySelector('button').disabled).toBeFalsy();
  });

  it(`should have an output message that contains 'Jose' as text when submit button is clicked`, async() => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#name-input').value = 'Jose';
    compiled.querySelector('#name-input').dispatchEvent(new Event('input'));
    fixture.detectChanges();
    compiled.querySelector('button').click();
    fixture.detectChanges();

    expect(compiled.querySelector('#message').textContent).toContain('Jose');
  });

  // it(`should have as title 'nice-messages-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('nice-messages-app');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to nice-messages-app!');
  // });
});
