# React-Fire

A mini project to figure out a way to use react routing and firebase (authentication & database) in harmony.
The challenge comes from the fact that I want to use the v6.4 routing with data router: `createBrowserRouter`, and firebase's v9 modular API.

- Implemented: React custom hook that returns a firebase user object
- Implemented: Provider Pattern to pass the user object to the rest of the app, using context API
- Implemented: Protected routes by writing two custom components: `ProtectedRoute` and `UnauthorizedRoute`
- Implemented: Reset password functionality with a timeout to prevent spamming the `Send Password Reset Email` button

### Planned to implement
- [ ] Firestore database
