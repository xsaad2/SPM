

## Launching the Applications

For both front- and backend there ar run scripts included in their `package.json`.
So you can just start them by running `npm run start` in their respective directories. On Windows systems you should  start
the _backend_ with `npm run start_win`, because there environment variables are handled a little different than in Unix.

After they are done starting, the frontend can be reached from your browser at: http://localhost:4200/

You can log in with username *admin* and the password, which is preconfigured at `backend/environment/environment.js` for local use or `backend/environment/environment.prod.js` remote deployment.
In case you changed and forgot your password, you can still empty the collection 'user' in the database and restart the backend. Then a new admin user will be created upon restart/redeployment.


## Project report:
https://docs.google.com/document/d/1RLFNmNiw87ICa1LGyVDuFmApChQhBLeMqJMSJIyYnds/edit?usp=sharing
