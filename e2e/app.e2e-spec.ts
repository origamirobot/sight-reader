import { SightReaderPage } from './app.po';

describe('sight-reader App', () => {
  let page: SightReaderPage;

  beforeEach(() => {
    page = new SightReaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
