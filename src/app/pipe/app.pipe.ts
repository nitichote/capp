import {CommonModule} from "@angular/common";
import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'subTx'})
export class SubTxPipe implements PipeTransform {
    transform(subtxs:any[], grcode:string): any[] {
        return subtxs.filter(x => x.scode.substr(0,2)==grcode );
      }
}