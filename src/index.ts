// import { Observable } from 'rxjs';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { retry } from 'rxjs/operators';

const fetchData = () => {
  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    return of('Fetched data successfully');
  } else {
    return _throw('Error: Failed to fetch data');
  }
};

const fetchData$ = defer(fetchData).pipe(retry(2));

fetchData$.subscribe(
  (data) => console.log('Data:', data),
  (error) => console.error('Error:', error)
);
