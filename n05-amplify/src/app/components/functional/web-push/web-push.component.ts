import { Component, OnInit } from '@angular/core';

import { ServiceWorker } from 'aws-amplify';
const serviceWorker = new ServiceWorker();
const yourPublicKey = '***************************************************************************';

@Component({
  selector: 'app-web-push',
  templateUrl: './web-push.component.html',
  styleUrls: ['./web-push.component.scss']
})
export class WebPushComponent implements OnInit {

  // https://feature-webpush.dma9ecr5ksxts.amplifyapp.com/amplify/webpush/

  registeredServiceWorker = null;
  buttonText = 'Enable Push Notification';
  message = '';

  constructor() { }

  ngOnInit(): void {
    console.log(serviceWorker);
  }

  async buttonPushed(): Promise<void> {
    let subscription = await serviceWorker.enablePush(yourPublicKey);
    let endpointInfo = JSON.stringify(subscription);
    this.message = endpointInfo;
  }

  data(): any {
    return {
      registeredServiceWorker: null,
      buttonText: 'Enable Push Notification',
      message: '',
    }
  }

  async created(): Promise<void> {
    this.registeredServiceWorker = await serviceWorker.register('/service-worker.js', '/')
    // this.registeredServiceWorker.send({'message': 'CleanAllCache'})
    // のように ServiceWorker とのメッセージングに利用可能
    if (Notification.permission == 'granted') {
      let subscription = await this.registeredServiceWorker.pushManager.getSubscription();
      let endpointInfo = JSON.stringify(subscription);
      this.message = endpointInfo;
      console.log(endpointInfo);
    }
  }

}
