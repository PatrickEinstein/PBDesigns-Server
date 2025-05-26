import cron from "node-cron";
export const KeepAlive = () => {
    try {
        // cron.schedule("* */10 * * *", async () => {
        cron.schedule("*/10 * * * *", async () => {
            console.log("I AM WAKE FROM CRON");
            const url = "https://www.google.com/";
            const fetched = await fetch(url, {
                method: "GET",
            });
            const res = await fetched.text();
            console.log(res);
        });
    }
    catch (e) {
        console.log(`Cron error==>`, e.message);
    }
};
