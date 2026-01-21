import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-intramuscular', // Puedes cambiar esto si tu selector es diferente
  templateUrl: './intramuscular.page.html', // Asegúrate que coincida con el nombre de tu archivo HTML
  styleUrls: ['./intramuscular.page.scss'], // Asegúrate que coincida con el nombre de tu archivo SCSS
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class IntramuscularPage {

  constructor() { }

}


