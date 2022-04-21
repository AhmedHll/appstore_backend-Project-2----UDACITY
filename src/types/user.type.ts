interface User {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  // hashPassword(password: unknown): string;
}
export default User;
