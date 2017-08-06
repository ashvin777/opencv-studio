import { OpencvStudioPage } from './app.po';

describe('opencv-studio App', () => {
  let page: OpencvStudioPage;

  beforeEach(() => {
    page = new OpencvStudioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
