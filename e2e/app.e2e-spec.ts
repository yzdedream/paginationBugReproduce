import { PaginationBugReproducePage } from './app.po';

describe('pagination-bug-reproduce App', () => {
  let page: PaginationBugReproducePage;

  beforeEach(() => {
    page = new PaginationBugReproducePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
