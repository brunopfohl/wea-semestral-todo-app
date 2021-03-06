import * as mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
    const dbUri = process.env.MONGODB_URI || config.get("dbUri") as string;

    return mongoose
        .connect(dbUri)
        .then(() => {
            log.info("Database connected");
        })
        .catch((error) => {
            log.error(error);
            log.error("db error", error);
            process.exit(1);
        });
}

export default connect;