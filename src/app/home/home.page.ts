import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // Importante para que funcione routerLink
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon,
  IonPopover, 
  IonList, 
  IonItem,
  IonLabel,
  IonGrid, 
  IonRow, 
  IonCol
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDownSharp } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink, // <--- Agregado
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonButtons, // <--- Agregado
    IonButton,  // <--- Agregado
    IonIcon,    // <--- Agregado
    IonPopover, // <--- Agregado
    IonList,    // <--- Agregado
    IonItem,    // <--- Agregado
    IonLabel,   // <--- Agregado
    IonGrid,    // <--- Agregado
    IonRow,     // <--- Agregado
    IonCol      // <--- Agregado
  ]
})
export class HomePage {
  constructor() {
    // Esto hace que el icono de la flechita funcione
    addIcons({ caretDownSharp });
  }
}