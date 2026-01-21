import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonButton, IonIcon, IonGrid, IonRow, IonCol, 
  IonPopover, IonList, IonItem, IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDownSharp } from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink, IonContent, IonHeader, IonTitle, 
    IonToolbar, IonButtons, IonButton, IonIcon, IonGrid, 
    IonRow, IonCol, IonPopover, IonList, IonItem, IonLabel
  ]
})
export class InicioPage {
  constructor() {
    addIcons({ caretDownSharp });
  }
}