import { from, of } from "rxjs";
import { concatMap, delay } from "rxjs/operators"
function observableWithDelay() {
    let arr: number[] = [1, 2, 3]
    from(arr).pipe(
        concatMap(
            (item: number) => of(item).pipe(delay(1000))
        )
    ).subscribe(
        (timedItem: number) => {
            console.log(timedItem);
        }
    )
}

observableWithDelay()


