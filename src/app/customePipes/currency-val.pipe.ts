import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyVal'
})
export class CurrencyValPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    console.log(args)
    if(args[0] == "USD"){
      return "$"+(value/args[1])
    }
    else{
      return "₹"+value
    }
  }

}
