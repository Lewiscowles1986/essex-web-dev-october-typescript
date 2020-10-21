import { Router } from 'express';
import hello from './hello';

const r:Router = Router({
    caseSensitive: false,
    mergeParams: true,
    strict: true
});

r.get('/', ...hello);

export default r;
