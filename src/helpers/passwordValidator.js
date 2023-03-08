export function passwordValidator(password,email) {
  if (!password) return "Password can't be empty."
  if (password.length < 5) return 'Password must be at least 5 characters long.'
  if ( email == "admin@admin.com" && password == "admin" ) return 'a'
  if ( email == "doctor@doctor.com" && password == "doctor" ) return 'd'
  return "Wrong Password!"
}
