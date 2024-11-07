import { Component, OnInit } from '@angular/core';
import {EventDriverService} from "../../state/event.driver.service";
import {ActionEvent} from "../../state/product.state";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  counter : number = 0 ;

  constructor(private evendrivenService : EventDriverService) { }

  ngOnInit(): void {
    this.evendrivenService.sourceEventSubjectObservable.subscribe((actionEvent : ActionEvent)=> {
      ++ this.counter;
    })


  }

}
