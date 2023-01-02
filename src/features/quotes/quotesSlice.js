// Action Creators
// TODO: Create action creators as defined in tests

// Action creators

export function addQuote(quote) {
  return {
    type: "quotes/add",
    payload: quote,
  };
}
export function removeQuote(id) {
  return {
    type: "quotes/remove",
    payload: id,
  };
}
export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id,
  };
};
export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id,
  };
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];

    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload);

    case "quotes/upvote":
      return state.map((q) => {
        if (q.id === action.payload) {
          return { ...q, votes: q.votes ? ++q.votes : 1 };
        } else {
          return q;
        }
      });
    case "quotes/downvote":
      return state.map((q) => {
        if (q.id === action.payload) {
          return { ...q, votes: q.votes ? --q.votes : 0 };
        } else {
          return q;
        }
      });

    default:
      return state;
  }
}
