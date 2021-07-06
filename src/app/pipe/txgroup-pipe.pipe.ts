import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txgroupPipe'
})
export class TxgroupPipePipe implements PipeTransform {

  transform(subtxs:any[], grcode:string): any[] {
    return subtxs.filter(x => x.scode.substr(0,2)==grcode );
  }

}
