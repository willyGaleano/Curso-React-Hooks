// {
//       id: new Date().getTime(),
//       title: "Shinra Tensei",
//       start: moment().toDate(),
//       end: moment().add(2, "hours").toDate(),
//       bgcolor: "#fafafa",
//       notes: "Garchar con Jun",
//       user: {
//         _id: "123",
//         name: "Willy",
//       },
//     },

import { types } from "../types/types";

const initialState = {
  //eventos del calendario
  events: [],
  //evento activo del calendario
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
        activeEvent: null,
      };
    case types.eventLoaded:
      return {
        ...state,
        events: [...action.payload],
      };
    case types.eventLogout:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
