import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = ',';

    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = parts[0].substring(2);
      numbers = parts[1];
    }

    const normalized = numbers.replace(/\n/g, delimiter);
    const numList = normalized.split(delimiter).map(num => parseInt(num, 10));

    const negatives = numList.filter(num => num < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numList.reduce((sum, num) => sum + num, 0);
  }
}
