import type { Toast } from "../../types/toast";

export type ToastAction = { type: "add"; toast: Toast } | { type: "dismiss"; id: string };

const MAX_VISIBLE = 4;

const toastReducer = (state: Toast[], action: ToastAction): Toast[] => {
  switch (action.type) {
    case "add":
      return [...state, action.toast].slice(-MAX_VISIBLE);
    case "dismiss":
      return state.filter((t) => t.id !== action.id);
  }
};

export default toastReducer;
