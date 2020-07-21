import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    let elRefMock: ElementRef;
    let renderer2: Renderer2;
    const directive = new HighlightDirective(elRefMock, renderer2);
    expect(directive).toBeTruthy();
  });
});
