// import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { defer } from 'rxjs/observable/defer';

const data = ['A', 'B', 'C'];

const of$ = of(data);
const from$ = from(data);
const defer$ = defer(() => of(data));

console.log('--- OF ---');
of$.subscribe((value) => console.log(value));

console.log('--- FROM ---');
from$.subscribe((value) => console.log(value));

console.log('--- DEFER ---');
defer$.subscribe((value) => console.log(value));
