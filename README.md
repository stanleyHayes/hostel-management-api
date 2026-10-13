# hostel-management-api

hostel management api is an application containing JavaScript. The checked-in dependency manifests use Express, MongoDB via Mongoose. Source modules cover `authentication`, `complaints`, `hostels`, `manager-occupations`, `reviews`, `room-occupations`, `rooms`, `users`, `complaint`, `hostel`.

## Repository layout

- `config/` — 1 tracked file(s).
- `controllers/` — 8 tracked file(s); source examples: `controllers/authentication.js`, `controllers/complaints.js`.
- `middleware/` — 1 tracked file(s); source examples: `middleware/authentication.js`.
- `models/` — 7 tracked file(s); source examples: `models/complaint.js`, `models/hostel.js`.
- `routes/` — 8 tracked file(s); source examples: `routes/authentication.js`, `routes/complaints.js`.
- `utils/` — 1 tracked file(s); source examples: `utils/geocoder.js`.

## Local setup

Run each package setup block from the repository root. For workspace repositories, install dependencies at the root before running application-specific scripts.

Clone this repository and enter its directory:

```sh
git clone https://github.com/stanleyHayes/hostel-management-api.git
cd hostel-management-api
```

### Node package: `package.json`

Use Node.js and npm.

```sh
npm install
```

- `npm run dev` — runs the declared `dev` script (`nodemon`).
- `npm run start` — runs the declared `start` script (`node index.js`).
- The package test script is a placeholder and exits with an error; it does not run an automated test suite.

## Configuration

The application declares `dotenv`. Review environment-variable references in the source and supply your own local values before starting it. Keep credentials out of Git; do not reuse committed credentials.

## Source entry points

- [controllers/authentication.js](controllers/authentication.js)
- [controllers/complaints.js](controllers/complaints.js)
- [controllers/hostels.js](controllers/hostels.js)
- [controllers/manager-occupations.js](controllers/manager-occupations.js)
- [controllers/reviews.js](controllers/reviews.js)
- [controllers/room-occupations.js](controllers/room-occupations.js)
- [controllers/rooms.js](controllers/rooms.js)
- [controllers/users.js](controllers/users.js)

## Development notes

Commands above come from the tracked manifests and source layout. External services and runtime configuration may be required. Documentation updates do not establish that the application is deployed or that its tests pass.
