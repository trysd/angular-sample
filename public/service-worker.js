addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  if (!(self.Notification && self.Notification.permission === 'granted'))
      return;

  var title = "Web Push Notification";
  var message = event.data.text();
  var icon = "https://aws-amplify.github.io/docs/images/Logos/aws_logo.png";
  var badge = "https://aws-amplify.github.io/docs/images/Logos/aws_logo.png";
  var options = {
      body: message,
      icon: icon,
      badge: badge
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notification click: ', event);
  event.notification.close();
  event.waitUntil(
      clients.openWindow('https://aws-amplify.github.io/amplify-js')
  );
});
