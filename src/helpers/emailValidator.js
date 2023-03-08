export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email can't be empty."
  if (!re.test(email)) return 'Ooops! We need a valid email address.'
  if (email == "admin@admin.com") return ''
  if (email == "doctor@doctor.com") return ''
  return "This email is not registered"
}
