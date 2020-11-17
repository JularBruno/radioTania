import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  isMobileResolution: boolean;

  imageViewImage="";
  imageViewHidden=true;

  slides = [
    {image: '../../assets/img/talleristas/AMICA.png'},
    {image: '../../assets/img/talleristas/BERENGUER.png'},
    {image: '../../assets/img/talleristas/CENTRA.png'},
    {image: '../../assets/img/talleristas/COSTA FEBRE.png'},
    {image: '../../assets/img/talleristas/COTTON.png'},
    {image: '../../assets/img/talleristas/equipo prueba 6.png'},
    {image: '../../assets/img/talleristas/HIDALGO.png'},
    {image: '../../assets/img/talleristas/LERARIO.png'},
    {image: '../../assets/img/talleristas/MONTELEONE.png'},
    {image: '../../assets/img/talleristas/NELLI.png'},
    {image: '../../assets/img/talleristas/PAGNUCCO.png'},
    {image: '../../assets/img/talleristas/PATZER.png'},
    {image: '../../assets/img/talleristas/PAVONI.png'},
    {image: '../../assets/img/talleristas/pesoa.png'},
    {image: '../../assets/img/talleristas/PICCINI.png'},
    {image: '../../assets/img/talleristas/ROSA VERA.png'},
    {image: '../../assets/img/talleristas/ZULIAN.png'},
  ];


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
    
  }

  ngOnInit() {
  }

  interactImage(clickedImage) {
    this.imageViewHidden = !this.imageViewHidden;
    this.imageViewImage = clickedImage;

  }

}


// trayectoria eventos capacitaciones videos  agenda cultural