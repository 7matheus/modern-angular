import { Component, computed, signal, effect } from '@angular/core';

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

  protected doubleCount = computed(() => this.count() * 2);

  private countLog = effect(() => {
    console.log('Count changed', this.count());
  });

  protected decreaseCounter() {
    this.count.update(n => n - 1);
  }

  protected incrementCounter() {
    this.count.update(n => n + 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }
}
