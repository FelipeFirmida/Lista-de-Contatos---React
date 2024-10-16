import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { adicionarContato } from '../store/reducers/contatos'

import { FormContainer, Campos, Botao } from './styles'

const Formulario = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(adicionarContato({ nome, email, telefone }))
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Campos
        type="text"
        value={nome}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNome(e.target.value)
        }
        placeholder="Nome completo"
        required
      />
      <Campos
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        placeholder="E-mail"
        required
      />
      <Campos
        type="tel"
        value={telefone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTelefone(e.target.value)
        }
        placeholder="Telefone"
        required
      />
      <Botao type="submit">Adicionar Contato</Botao>
    </FormContainer>
  )
}

export default Formulario
