export const NAMES = {
  name: 'name',
  email: 'email',
  password: 'password',
  valid: '',
}

export const regExpEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const regExpPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/

export const regExpUserName = /^[A-Z][A-Za-z0-9_]{3,29}$/
