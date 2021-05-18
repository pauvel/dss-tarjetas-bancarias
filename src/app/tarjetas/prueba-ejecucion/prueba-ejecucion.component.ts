import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prueba-ejecucion',
  templateUrl: './prueba-ejecucion.component.html',
  styleUrls: ['./prueba-ejecucion.component.css']
})
export class PruebaEjecucionComponent implements OnInit {

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Get params & do stuff.
    });
  }

}
