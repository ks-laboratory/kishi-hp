import { KishiHpPage } from './app.po';

describe('kishi-hp App', () => {
  let page: KishiHpPage;

  beforeEach(() => {
    page = new KishiHpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
