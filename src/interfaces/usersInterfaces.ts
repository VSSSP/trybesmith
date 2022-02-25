export interface InputUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface User extends InputUser {
  id: number,
}

// export interface UsernameAndId {
//   id: number,
//   username: string,
// }

// Register / Login