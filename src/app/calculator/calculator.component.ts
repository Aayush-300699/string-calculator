import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  inputString: string = '';
  result: number | string = '';

  constructor(private calculatorService: CalculatorService) { }

  calculate(): void {
    try {
      this.result = this.calculatorService.add(this.inputString);
    } catch (error: any) {  // Cast error to any or Error type
      this.result = error.message;
    }
  }
  
}
