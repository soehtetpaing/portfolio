import { inject, Injectable } from '@angular/core';
import { HttpService } from '../utils/http.service';
import { app } from '../config/app.config';
import { ContactForm } from '../interface/portfolio-model';

@Injectable({
  providedIn: 'root',
})
export class NotiService {
  http = inject(HttpService);
  baseUrl = app.notiUrl;
  
  // contact us email send
  sendMessage(formdata: ContactForm) {
    const path = "/email/message/receive";
    const url = this.baseUrl + path;
    const body = {
      name: formdata.name,
      email: formdata.email,
      subject: formdata.subject || "",
      message: formdata.message,
      projectcode: app.projectcode
    }

    console.log(body);
    return this.http.post(url, body);

  }
}
