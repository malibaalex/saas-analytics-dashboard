import type { NewReportField, NewReportInput } from "../../types/reportInput";

export interface FormErrors {
  name?: string;
  dateRange?: string;
  email?: string;
}

export interface FormState {
  values: NewReportInput;
  errors: FormErrors;
}

export type FormAction =
  | { type: "change"; field: NewReportField; value: string }
  | { type: "setErrors"; errors: FormErrors }
  | { type: "reset" };

export const initialFormState: FormState = {
  values: { name: "", startDate: "", endDate: "", email: "" },
  errors: {},
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "change": {
      const errorKey: keyof FormErrors =
        action.field === "startDate" || action.field === "endDate"
          ? "dateRange"
          : (action.field as "name" | "email");
      const { [errorKey]: _cleared, ...errors } = state.errors;
      return { values: { ...state.values, [action.field]: action.value }, errors };
    }
    case "setErrors":
      return { ...state, errors: action.errors };
    case "reset":
      return initialFormState;
  }
};

export default formReducer;
