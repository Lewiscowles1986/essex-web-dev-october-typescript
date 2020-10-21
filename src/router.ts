import { Router, Request, Response }  from 'express';

const r:Router = Router({
    caseSensitive: false,
    mergeParams: true,
    strict: true
});

r.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World');
});

export default r;
