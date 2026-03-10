import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from './title/title';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title], // TODO once routing is done, remove this import
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pokedex.Angular');
}
