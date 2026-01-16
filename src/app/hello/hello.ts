import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected username: string = 'Matheus';
  protected isDisabled: boolean = false;

  protected onClick(): void {
    this.isDisabled = !this.isDisabled;
  }
}
