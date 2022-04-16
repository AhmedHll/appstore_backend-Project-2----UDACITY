interface User {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  hashPassword(password: unknown): string;
}
export default User;
