### Setting Up Dev Environment:

- Clone the repo and `npm install` the dependencies.
- Create a Firebase project.
- Create a Firestore db using the following schema:

```javascript
SCHEMA PLACEHOLDER
```

- Set the Firestore db rules to the following rules:

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
    	allow create
      allow read: if request.auth.uid != null
      allow write: if request.auth.uid == userId
    }
    match /notifications/{notifications} {
      allow read: if request.auth.uid != null
    }
  }
}
```

- Fill in your actual keys in `src/config/`.
- `npm run start` will run in a dev environment.

### Firebase Deployment:

- PLACEHOLDER
