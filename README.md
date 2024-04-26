### Music Player App Server

This is the backend for the Music Player App, deployed at https://preprod13kirtan.netlify.app/. The frontend repo is here: https://github.com/isupreetk/brahm-bunga-dodra-kirtan.

### Install Instructions

If you would like to run this app locally -

1. Clone the main branch.

2. Create a new schema (called kirtan in my .env example) in MySQL Workbench.

3. Install dependencies:\
   `npm i`

4. Create a .env file in the root of the project folder with the following environment variables set to your information:

   ```
   PORT=5050
   DB_HOST=127.0.0.1
   DB_USER=<your_username>
   DB_PASSWORD=<your_password>
   DB_DATABASE=kirtan
   ```

5. Configure the database:\
   `npm run migrate`

6. If you would like to demo the app with seed data instead of uploading your own data file in app:\
   `npm run seed`

7. Run the server:\
   `npm start`

### Endpoints

##### GET /settings/key="Version/FileURL"

- sends current values of the Version or FileURL key from the DB.

##### GET /settings/key="Version"&key="FileURL"

- sends current values of both the Version and FileURL

##### POST /uploadFile

- uploads a new file to the data folder using Multer
- returns success / fail status code

post body example:

```
{
file: <your_data_file>
}
```
