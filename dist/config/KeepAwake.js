import cron from "node-cron";
export const KeepAlive = () => {
    try {
        cron.schedule("* */10 * * *", () => {
            console.log("I AM WAKE FROM CRON");
        });
    }
    catch (e) {
        console.log(`Cron error==>`, e.message);
    }
};
