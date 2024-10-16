import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  #root {
      display: block;
    }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f4f4f4;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const Titulo = styled.h1`
  display: flex;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 15px;
  }
`

export const Campos = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const Botao = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
  background-color: #abc32f;
  text-align: center;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Lista = styled.ul`
  margin-top: 20px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const ItemContato = styled.li`
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const InfoContato = styled.div`
  font-size: 1.1rem;

  h2 {
    font-size: 1.1rem;
    margin: 8px 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

export const BotoesContato = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 8px 12px;
    margin-top: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    font-size: 1rem;

    &.editar,
    &.salvar {
      background-color: #2196f3;

      &:hover {
        background-color: #0b7dda;
      }
    }

    &.remover,
    &.cancelar {
      background-color: #f44336;

      &:hover {
        background-color: #da190b;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
    button {
      width: 100%;
    }
  }
`
