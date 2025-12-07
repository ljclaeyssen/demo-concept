import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-callbacks-hell-slide',
  templateUrl: './callbacks-hell.slide.html',
  styleUrl: './callbacks-hell.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallbacksHellSlide {
  callbackCode = signal(`// 😱 Callback Hell - difficile à lire et maintenir
getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].id, (details) => {
      getProductInfo(details.productId, (product) => {
        console.log(product);
        // Et si on veut gérer les erreurs ? 🤯
      });
    });
  });
});`);

  promiseCode = signal(`// 😐 Promises - mieux, mais toujours des .then()
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => getProductInfo(details.productId))
  .then(product => console.log(product))
  .catch(error => console.error(error));`);

  rxjsCode = signal(`// 😍 RxJS - clair, lisible, puissant
getUser(userId).pipe(
  switchMap(user => getOrders(user.id)),
  switchMap(orders => getOrderDetails(orders[0].id)),
  switchMap(details => getProductInfo(details.productId))
).subscribe({
  next: product => console.log(product),
  error: err => console.error(err)
});`);
}
