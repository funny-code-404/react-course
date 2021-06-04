import { addTodo, setVisibilityFilter, toggleTodo } from '..';

describe('Actions', () => {
  describe('Add todo', () => {
    it('should create action', () => {
      const text = 'Some text...';
      const expectedAction = {
        type: 'ADD_TODO',
        id: 0,
        text,
      };

      expect(addTodo(text)).toEqual(expectedAction);
    });
  });

  describe('Set visibility filter', () => {
    it('should create action', () => {
      let filter = 'SHOW_ALL';
      expect(setVisibilityFilter(filter).filter).toEqual('SHOW_ALL');

      filter = 'SHOW_COMPLETED';
      expect(setVisibilityFilter(filter).filter).toEqual('SHOW_COMPLETED');

      filter = 'SHOW_ACTIVE';
      expect(setVisibilityFilter(filter).filter).toEqual('SHOW_ACTIVE');
    });
  });

  describe('Toggle Todo', () => {
    it('should create action', () => {
      const expectedAction = {
        type: 'TOGGLE_TODO',
        id: 1,
      };

      expect(toggleTodo(1)).toEqual(expectedAction);
    });
  });
});
