import app from "./app";

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`BestAIAgent.in SSR server listening on ${port}`));
