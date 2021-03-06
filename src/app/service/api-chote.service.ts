import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//-import * as CryptoJs from "crypto-js";
//import * as crypto from 'crypto-js';
@Injectable({
  providedIn: "root",
})
export class ApiChoteService {
  get getKey() {
    return "13";
  }

  get apiUrl() {
    return "http://203.157.182.16:3101";
  }

  get secretKey() {
    return "5bb4660ad4947af87cd38af5888b9eac";
  }

  constructor(private http: HttpClient) {}
  api = 'http://127.0.0.1:3002/capp2006/';
  async sqlName(sqlName: string) {
    const url = `${this.apiUrl}/getData`;
    const object = {
      sqlName,
      connKey: this.getKey,
    };
    const data = await this.encrypt(object);
    const body = {
      data,
    };
    const rs: any = await this.http.post(url, body).toPromise();

    const rows = await this.decrypt(rs.rows);
    const response = {
      ok: rs.ok,
      rows,
    };
    return response;
  }

  encrypt(data: any) {
   // const cipherText = CryptoJs.AES.encrypt(
   //   JSON.stringify(data),
   //   this.secretKey
  //  );
   // return cipherText.toString();
  }

  decrypt(enc: string) {
  //  const bytes = CryptoJs.AES.decrypt(enc, this.secretKey);
  //  const plainText = bytes.toString(CryptoJs.enc.Utf8);
  //  return JSON.parse(plainText.toString());
  }
  async getRout(r:string) {
    //const url =
   //   "https://dmfzero.com/apileaf/apis.php/dentalkpi/dentreporttemplate/hdc";
   
   let api2020 =  this.api+ r;

   return await this.http.get(api2020).toPromise();
  }
  async getTable(tbl:string) {
    //const url =
   //   "https://dmfzero.com/apileaf/apis.php/dentalkpi/dentreporttemplate/hdc";
   let api2020 =  this.api+ "table/"+tbl;
console.log(api2020);

   return await this.http.get(api2020).toPromise();
  }
  async getpt(hn:string) {
    //const url =
   //   "https://dmfzero.com/apileaf/apis.php/dentalkpi/dentreporttemplate/hdc";
   let api2020 =  this.api+ "pt/"+hn;

   return await this.http.get(api2020).toPromise();
  }
  async insertData(tableName: string, formData: any) {
    const f = [];
    f.push(formData);
    const url = `${this.api}insert`;
    const data = {
      tableName,
      formData: f,
    };
    const body = {
      data,
    };

    const rs: any = await this.http.post(url, body).toPromise();

    return rs;
  }
  async insertUpdateData(tableName: string, whereName: any, formData: any) {
    const w = [];
    w.push(whereName);
    const f = [];
    f.push(formData);
    const url = `${this.api}insertUpdate`;
    const data = {
      tableName,
      whereName: w,
      formData: f,
    };
    const body = {
      data,
    };
     console.log(body);

    const rs: any = await this.http.post(url, body).toPromise();
    console.log(rs);

    return rs;
  }
}
