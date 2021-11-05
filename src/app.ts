import express from 'express'
import arrays_router from "./routes/route"
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.disable('etag');


app.use('/api',arrays_router)
export default app;
