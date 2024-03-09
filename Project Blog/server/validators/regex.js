export const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

export const emailPattern =
  /r'^((?=.*\$)((?=.*[0-9]){3,})(?=.*[a-z]*))(\@)((google\.com)|([a-z0-9\!\@\#\%\^\&]*\.go))$'/;

export const patterns = {
  password: passwordPattern,
  email: emailPattern,
};
