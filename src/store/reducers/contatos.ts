import { createSlice } from '@reduxjs/toolkit'

interface Contato {
  id: number
  nome: string
  email: string
  telefone: string
}

const initialState: Contato[] = []

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action) => {
      state.push({ ...action.payload, id: Date.now() })
    },
    removerContato: (state, action) => {
      return state.filter((contato) => contato.id !== action.payload)
    },
    editarContato: (state, action) => {
      const { id, nome, email, telefone } = action.payload
      const contato = state.find((contato) => contato.id === id)
      if (contato) {
        contato.nome = nome
        contato.email = email
        contato.telefone = telefone
      }
    }
  }
})

export const { adicionarContato, removerContato, editarContato } =
  contatosSlice.actions
export default contatosSlice.reducer
