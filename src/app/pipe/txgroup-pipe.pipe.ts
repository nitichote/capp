import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txgroupPipe',
})
export class TxgroupPipePipe implements PipeTransform {
  transform(subtxs: any[], grcode: string) {
    return subtxs.filter((x) => x.scode.substr(0, 2) == grcode);
  }
}


@Pipe({
  name: 'txcode',
})
export class TxcodePipe implements PipeTransform {
  transform(txs: any[], scode: string) {
    return txs.filter((x) => x.scode.substr(0, 4) == scode);
  }
}