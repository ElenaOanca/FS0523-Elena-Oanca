import { PizzaService } from './../../pizza.service';
import { Component } from '@angular/core';
import { iPizza } from '../../Models/ipizza';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  constructor(
    private pizzaSvc:PizzaService,
    private router:Router,
    private route:ActivatedRoute
    ){}

  pizza:iPizza = {
    gusto: '',
    prezzo: 0,
    active: ''
  }

  ngOnInit(){
    this.route.params.subscribe((params:any) => {

      this.pizzaSvc.getById(params.id).subscribe(res => {
        this.pizza = res;
      })

    })
  }

  save(){
    this.pizzaSvc.update(this.pizza)
    .subscribe(res => this.router.navigate(['/menu']))
  }

}
