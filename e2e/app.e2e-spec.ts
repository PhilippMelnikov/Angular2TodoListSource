import { ToDoListPage } from './app.po';

describe('to-do-list', () => {
  let page: ToDoListPage;

  beforeEach(() => {
    page = new ToDoListPage();
  });

  it('should display title saying todo-list', () => {
    page.navigateTo();
    
    expect(page.getTitleText()).toEqual('todo-list');
    
  });
});
