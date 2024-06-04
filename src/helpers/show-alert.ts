export const showAlertFunction = (
  setShowAlert: (showAlert: boolean) => void
) => {
  setShowAlert(true);
  setTimeout(() => {
    setShowAlert(false);
  }, 5000);
};
