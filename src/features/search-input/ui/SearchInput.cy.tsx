import { proxyLocators } from '../../../shared/lib/tests';
import { SearchInput } from './SearchInput';
import { inputValueUpdated, resetModel } from '../model';

describe('feature/search-input', () => {
  it('Если компонент отрендерен, то фокусировка должна быть на инпуте', () => {
    mount();
    Component.Input.focused();
  });

  it('Если в инпуте есть значение, то при повторной фокусировке должен быть выделен весь диапазон', () => {
    mount();
    Component.Input.type('kek');

    cy.get('body').click();
    Component.Input.click().then(x => {
      const input = x[0] as unknown as HTMLInputElement;

      const range = (input?.selectionEnd || 0) - (input?.selectionStart || 0);

      expect(range).equal(3);
    });
  });

  it('Если ввели значение в инпут, то событие inputValueUpdated должно быть вызвано через 500ms', () => {
    let message = '';

    const unwatch = inputValueUpdated.watch(value => {
      message = value;
    });

    mount();
    Component.Input.type('Настольные игры');

    expect(message).equal('');
    cy.wait(400)
      .then(() => {
        expect(message).equal('');
      })
      .wait(101)
      .then(() => {
        expect(message).equal('Настольные игры');
        unwatch();
      });
  });

  beforeEach(() => {
    resetModel();
  });
});

const mount = () => cy.mount(<SearchInput />);

const Component = proxyLocators({
  Input: 'search-input',
});
/**
 
 * Если ввели значение в инпут, то событие inputValueUpdated должно быть вызвано через 500ms
 */
