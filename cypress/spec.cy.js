describe('Tic-Tac-Toe E2E Comprehensive Tests', () => {

  beforeEach(() => {
    // Відкриваємо сайт перед кожним тестом
    cy.visit('http://localhost:3000');
  });

  context('Тести сторінки Login', () => {
    it('tries to login without input data', () => {
      // Перехоплюємо алерт, щоб тест не впав через текст
      cy.on('window:alert', cy.stub().as('alertStub'));
      cy.get('button').contains('Увійти').click();
      cy.get('@alertStub').should('have.been.called');
    });

    it('tries to login with incorrect credentials', () => {
      cy.get('input[placeholder="Email"]').type('wrong@email.com');
      cy.get('input[placeholder="Пароль"]').type('wrongpassword');
      cy.on('window:alert', cy.stub().as('alertStub'));
      cy.get('button').contains('Увійти').click();
      cy.get('@alertStub').should('have.been.called');
    });

    it('tries to login with valid credentials', () => {
      const user = { email: 'test@m.com', password: '123', name: 'Tester' };
      // Правильно ініціалізуємо localStorage ПІД ЧАС завантаження сторінки
      cy.visit('http://localhost:3000', {
        onBeforeLoad(win) {
          win.localStorage.setItem('user', JSON.stringify(user));
        }
      });
      
      cy.get('input[placeholder="Email"]').type('test@m.com');
      cy.get('input[placeholder="Пароль"]').type('123');
      cy.get('button').contains('Увійти').click();
      
      // Перевіряємо, що перейшли в профіль
      cy.contains('PLAY').should('be.visible');
    });
  });

context('Тести сторінки Registration', () => {
    it('tries to register new user', () => {
      cy.contains('Реєстрація').click();
      cy.get('input[placeholder="Nickname"]').type('NewPlayer');
      cy.get('input[placeholder="Email"]').type('new@m.com');
      
      cy.get('input[placeholder="Пароль"]').type('123456'); 

      cy.on('window:alert', cy.stub().as('regAlertStub'));
      cy.get('button').contains('Зареєструватися').click();
    });
  });

  context('Тести сторінки Profile', () => {
    it('checks user data displaying', () => {
      const user = { name: 'AdminTester', email: 'admin@mail.com', sex: 'Чоловіча', birthDate: '2000-01-01' };
      cy.visit('http://localhost:3000', {
        onBeforeLoad(win) {
          win.localStorage.setItem('user', JSON.stringify(user));
          win.localStorage.setItem('currentPage', 'profile'); // Одразу відкриваємо профіль
        }
      });
      cy.contains('AdminTester').should('be.visible');
      cy.contains('admin@mail.com').should('be.visible');
    });

    it('navigates to game page via PLAY button', () => {
      cy.visit('http://localhost:3000', {
        onBeforeLoad(win) {
          win.localStorage.setItem('currentPage', 'profile');
        }
      });
      cy.contains('PLAY').click();
      cy.contains('Очистити').should('be.visible'); // Кнопка очищення є тільки в грі
    });
  });

  context('Тести сторінки Game (Ігровий процес)', () => {
    it('checks game process (X and O moves)', () => {
      // Відкриваємо гру напряму
      cy.visit('http://localhost:3000', {
        onBeforeLoad(win) { win.localStorage.setItem('currentPage', 'game'); }
      });
      
      // Робимо ходи (eq(0) - це перша кнопка-клітинка)
      cy.get('button').eq(0).click().should('have.text', 'X');
      cy.get('button').eq(1).click().should('have.text', 'O');
      cy.get('button').eq(4).click().should('have.text', 'X');
    });

    it('checks reset board button', () => {
      cy.visit('http://localhost:3000', {
        onBeforeLoad(win) { win.localStorage.setItem('currentPage', 'game'); }
      });
      cy.get('button').eq(0).click().should('have.text', 'X');
      cy.contains('Очистити').click();
      cy.get('button').eq(0).should('have.text', ''); // Клітинка стала порожньою
    });
  });

  context('Тести сторінки About', () => {
    it('checks that About page contains creator info', () => {
      cy.contains('Про нас').click();
      cy.contains('Розробник:').should('be.visible');
    });

    it('checks game logo icons presence', () => {
      cy.contains('Про нас').click();
      cy.contains('⭕❌').should('be.visible');
    });
  });

  context('Комплексні тести', () => {
    it('full flow: register -> login -> play game', () => {
      cy.visit('http://localhost:3000');
      
      cy.contains('Реєстрація').click();
      cy.get('input[placeholder="Nickname"]').type('ProGamer');
      cy.get('input[placeholder="Email"]').type('pro@game.com');
      cy.get('input[placeholder="Пароль"]').type('123456'); 
      
      cy.on('window:alert', cy.stub().as('alertStub'));
      cy.get('button').contains('Зареєструватися').click();

      cy.get('nav').contains('Вхід').click();
      cy.get('input[placeholder="Email"]').type('pro@game.com');
      cy.get('input[placeholder="Пароль"]').type('123456');
      cy.get('button').contains('Увійти').click();

    });
  });
});
