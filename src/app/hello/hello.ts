import { Component, signal } from '@angular/core';

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

  protected count = signal(0);

  decreaseCounter() {
    this.count.update(n => n - 1);
  }

  incrementCounter() {
    this.count.update(n => n + 1);
  }

  resetCounter() {
    this.count.set(0);
  }
}
