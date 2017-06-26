import { browser, element, by } from 'protractor';

export class ToDoListPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return browser.getTitle();
  }
}
