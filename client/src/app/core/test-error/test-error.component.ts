import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  baseUrl = environment.baseUrl;
  validationErrors: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async get404Error(): Promise<void>{
    try
    {
      const res: any = await this.http.get(this.baseUrl + 'products/42').toPromise();
      console.log(res);
    }
    catch (err)
    {
      console.log(err);
    }
  }

  async get500Error(): Promise<void>{
    try
    {
      const res: any = await this.http.get(this.baseUrl + 'buggy/servererror').toPromise();
      console.log(res);
    }
    catch (err)
    {
      console.log(err);
    }
  }

  async get400Error(): Promise<void>{
    try
    {
      const res: any = await this.http.get(this.baseUrl + 'buggy/badrequest').toPromise();
      console.log(res);
    }
    catch (err)
    {
      console.log(err);
    }
  }
  async get400ValidationError(): Promise<void>{
    try
    {
      const res: any = await this.http.get(this.baseUrl + 'products/five').toPromise();
      console.log(res);
    }
    catch (err)
    {
      console.log(err);
      this.validationErrors = err.errors;
    }
  }

}
