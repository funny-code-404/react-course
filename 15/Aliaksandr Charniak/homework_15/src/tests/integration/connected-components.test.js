// npm i -D --save-exact jsdom jsdom-global
// npm i -D @testing-library/react
// data-test - для интеграционных тестов

import 'jsdom-global/register';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import App from '../../components/App';
import rootReducer from '../../redux/reducers';

const store = createStore(rootReducer);

describe('Connected Component Full App Integration Tests', () => {
  it('should add Todo item using fireEvent', () => {
    const { container, getByTestId, getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const inputElement = getByTestId('add-todo-input');
    const buttonElement = getByText('Add Todo');
    const testValue = 'Test';

    fireEvent.change(inputElement, { target: { value: testValue } });
    fireEvent.click(buttonElement);

    const li = container.querySelector('li');

    expect(li.textContent).toEqual(testValue);
  });
});
