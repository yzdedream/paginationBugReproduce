## Bug description
A bug in ngx-bootstrap pagination module.

There is a long list to be displayed in pages. The list can also be filtered. When changing to a shorter filtered list, if the current page number is larger than the total pages number of the new list an error occurs.

## Bug reproduce
* npm install
* ng serve
* click to page 2
* click bug button
* ExpressionChangedAfterItHasBeenCheckedError
