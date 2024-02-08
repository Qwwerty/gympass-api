## App


GymPass style app.

## RFs (Functional Requirements)

- [x] It should be possible to register.
- [x] Deve ser possível se autenticar.
- [x] It should be possible to get the profile of a logged-in user.
- [x] It should be possible to get the number of check-ins performed by the logged-in user.
- [x] Deve ser possível o usuário obter seu histórico de check-ins.
- [x] It should be possible for the user to search for nearby gyms up to (10km).
- [x] It should be possible for the user to search for gyms by name.
- [x] It must be possible for the user to check in to a gym.
- [x] It must be possible to validate a user's check-in.
- [x] It should be possible to register a gym.

## RNs (Business rules)

- [x] The user should not be able to register with a duplicate email.
- [x] The user cannot do 2 check-ins on the same day.
- [x] The user cannot check-in if they are not close (100m) to the gym.
- [x] Check-in can only be validated up to 20 minutes after creation.
- [x] Check-in can only be validated by administrators.
- [x] The academy can only be registered by administrators.

## RNFs (Non-functional requirements)

- [x] The user's password must be encrypted.
- [x] Application data must be persisted in a PostgreSQL database.
- [x] All data lists must be paginated with 20 items per page.
- [x] The user must be identified by a JSON Web Token (JWT).
