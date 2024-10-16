import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removerContato, editarContato } from '../store/reducers/contatos'
import { RootReducer } from '../store'
import { Campos, ItemContato, InfoContato, BotoesContato } from './styles'

const ListaContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos)
  console.log(contatos)
  const dispatch = useDispatch()

  const [editandoId, setEditandoId] = useState<number | null>(null)
  const [novoNome, setNovoNome] = useState('')
  const [novoEmail, setNovoEmail] = useState('')
  const [novoTelefone, setNovoTelefone] = useState('')

  const iniciarEdicao = (contato: any) => {
    setEditandoId(contato.id)
    setNovoNome(contato.nome)
    setNovoEmail(contato.email)
    setNovoTelefone(contato.telefone)
  }

  const salvarEdicao = (id: number) => {
    dispatch(
      editarContato({
        id,
        nome: novoNome,
        email: novoEmail,
        telefone: novoTelefone
      })
    )
    setEditandoId(null)
  }

  return (
    <ul>
      {contatos.map((contato) => (
        <ItemContato key={contato.id}>
          {editandoId === contato.id ? (
            <div>
              <Campos
                type="text"
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
                placeholder="Nome completo"
              />
              <Campos
                type="email"
                value={novoEmail}
                onChange={(e) => setNovoEmail(e.target.value)}
                placeholder="E-mail"
              />
              <Campos
                type="tel"
                value={novoTelefone}
                onChange={(e) => setNovoTelefone(e.target.value)}
                placeholder="Telefone"
              />
              <BotoesContato>
                <button
                  className="salvar"
                  onClick={() => salvarEdicao(contato.id)}
                >
                  Salvar
                </button>
                <button
                  className="cancelar"
                  onClick={() => setEditandoId(null)}
                >
                  Cancelar
                </button>
              </BotoesContato>
            </div>
          ) : (
            <div>
              <InfoContato>
                <h2>Nome:</h2> {contato.nome} <h2>E-mail:</h2> {contato.email}{' '}
                <h2>Telefone:</h2>
                {contato.telefone}
              </InfoContato>
              <BotoesContato>
                <button
                  className="editar"
                  onClick={() => iniciarEdicao(contato)}
                >
                  Editar
                </button>
                <button
                  className="remover"
                  onClick={() => dispatch(removerContato(contato.id))}
                >
                  Remover
                </button>
              </BotoesContato>
            </div>
          )}
        </ItemContato>
      ))}
    </ul>
  )
}

export default ListaContatos
