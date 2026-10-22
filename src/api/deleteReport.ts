import reportStore from "./reportStore";
import simulateRequest from "./simulateRequest";

const deleteReport = (id: string): Promise<void> => {
  return simulateRequest(() => {
    if (!reportStore.remove(id)) throw new Error("That report no longer exists.");
  });
};

export default deleteReport;
