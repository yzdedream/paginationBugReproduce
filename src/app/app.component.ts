import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullList = ['str1', 'str2', 'str3', 'str4'];
  filteredList = ['str1', 'str2'];
  page1 = ['str1', 'str2'];
  page2 = ['str3', 'str4'];
  pages = [this.page1, this.page2];

  displayedList = this.pages[0];
  totalItems = 4;
  currentPage = 1;

  pageChanged(event) {
    this.displayedList = this.pages[event.page - 1];
  }

  onClick() {
    this.pages = [this.filteredList];
    this.totalItems = 2;
  }

}
