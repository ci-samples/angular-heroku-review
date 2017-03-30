import { AngularHerokuReviewPage } from './app.po';

describe('angular-heroku-review App', () => {
  let page: AngularHerokuReviewPage;

  beforeEach(() => {
    page = new AngularHerokuReviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
