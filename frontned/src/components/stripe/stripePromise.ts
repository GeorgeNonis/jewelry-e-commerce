// import { loadStripe } from '@stripe/stripe-js';
// import { Stripe } from '@stripe/stripe-js';

// const stripePromise: Promise<Stripe | null> = process.env.NODE_ENV === 'production'
//   ? loadStripe('your_production_publishable_key')
//   : (async () => {
//       const stripeMock = await import('stripe-mock');
//       const mockServer = new stripeMock.Server({
//         port: 8001, // Choose any available port number
//         // Additional configuration options if needed
//       });
//       await mockServer.start();
//       return loadStripe('your_test_publishable_key', {
//         stripeAccount: 'test_account',
//         apiBase: `http://localhost:8001/v1`, // Make sure to match the port number above
//       });
//     })();

// export default stripePromise;
