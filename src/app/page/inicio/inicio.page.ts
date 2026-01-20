import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon,
  IonPopover, // <--- IMPORTANTE: El menú flotante
  IonList,    // <--- IMPORTANTE: Lista de opciones
  IonItem,
  IonLabel,
  IonGrid,    // (Solo si la página lo usa, ej: parenterales)
  IonRow,     // (Solo si la página lo usa)
  IonCol
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDownSharp } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  // Aquí importamos los componentes visuales que usamos en el HTML
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink, // <--- No olvides añadirlo aquí
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonButton, 
    IonIcon,
    IonPopover, // <--- Añadir aquí
    IonList,    // <--- Añadir aquí
    IonItem,    // <--- Añadir aquí
    IonLabel    // <--- Añadir aquí
  ]
})
export class InicioPage {

  constructor() {
    // Registramos el icono de la flechita
    addIcons({ caretDownSharp });
  }

}
