<<<<<<< HEAD
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


=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonGrid,   // <--- Asegúrate que esté aquí
  IonRow,    // <--- Asegúrate que esté aquí
  IonCol,    // <--- Asegúrate que esté aquí
  IonBackButton 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDownOutline, arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-intramuscular',
  templateUrl: './intramuscular.page.html',
  styleUrls: ['./intramuscular.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonGrid,   // <--- Importante incluirlo aquí también
    IonRow,    // <--- Importante incluirlo aquí también
    IonCol,    // <--- Importante incluirlo aquí también
    IonBackButton
  ]
})
export class IntramuscularPage implements OnInit {
  constructor() {
    addIcons({ caretDownOutline, arrowBackOutline });
  }

  ngOnInit() {}
}
>>>>>>> main
