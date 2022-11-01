const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento "count" deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Para o argumento "names" deve retornar um array de nomes que possui o nome "Jefferson"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Para o argumento "averageAge" deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Para o argumento "undefined" deve retornar "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Para o argumento string vazia deve retornar "null"', () => {
    expect(handlerElephants('')).toBeNull();
  });
  it('Para o argumento diferente de string deve retornar "Parâmetro inválido, é necessário uma string"', () => {
    expect(handlerElephants(2)).toMatch(/Parâmetro inválido, é necessário uma string/);
  });
  it('Para o argumento "id" deve retornar "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5"', () => {
    expect(handlerElephants('id')).toMatch('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
});
