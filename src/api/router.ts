import { Router } from 'express';
import hello from './hello';
import leapYear from './leap-year';

const r:Router = Router({
    caseSensitive: false,
    mergeParams: true,
    strict: true
});

r.get('/', ...hello);
r.get('/leap-year', ...leapYear);

export default r;
