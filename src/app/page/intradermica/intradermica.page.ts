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
  selector: 'app-intradermica',
  templateUrl: './intradermica.page.html',
  styleUrls: ['./intradermica.page.scss'],
  standalone: true,
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
    IonList, // <--- Añadir aquí
    IonItem, // <--- Añadir aquí
    IonLabel // <--- Añadir aquí
    ,
    IonCol,
    IonGrid,
    IonRow
]
})
export class IntradermicaPage {

  constructor() {
    addIcons({ caretDownSharp });
  }

}