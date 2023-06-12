export const Validation = (account: string | null) => {
  let errorMessage = {};

  if (!account) {
    errorMessage = "Không được bỏ trống";
  }
};
