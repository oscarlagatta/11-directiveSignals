import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private readonly htmlElement?: ElementRef<HTMLElement>;
  public _color: string = 'green';
  private _errors?: ValidationErrors | null | undefined;

  @Input() set color( value: string) {
    this._color = value;
    this.setStyle();
    // console.log({color: value})
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }


  constructor(private readonly el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // console.log('Directive onInit')
  }

  setStyle() {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage() {
    if (!this.htmlElement) return;

    if (!this._errors) {
      this.htmlElement!.nativeElement.innerText = 'No Errors Found';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement!.nativeElement.innerText = 'This Field is Required';
    }

    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];
      this.htmlElement!.nativeElement.innerText = `Min ${current}/${min} characters.`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement!.nativeElement.innerText = 'Not Valid Email Format';
      return;
    }
  }
}
