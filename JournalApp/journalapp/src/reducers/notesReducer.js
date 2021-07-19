/*
    {
        notes: [],
        active: null,
        active: {
            id: "adasjkklñdkañslkdñ",
            title: "",
            body: "",
            imageUrl: "",
            date: 123345668  
        }
    }

*/

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.notesAddNew:
      return {
        ...state,
        //desestructuramos el state.notes para crear unanueva copia de las notas
        notes: [action.payload, ...state.notes],
      };

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case types.noteDelete:
      return {
        //esparcimos el state para no perder el estado anterior
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case types.notesLogoutCleaning:
      return {
        ...state,
        active: null,
        notes: [],
      };
    default:
      return state;
  }
};
