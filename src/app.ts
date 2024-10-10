import express from "express";
import * as bodyParser from "body-parser";
import {routes} from "../server";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(5050, () => {
    console.log('Server started at port 5050');
});

