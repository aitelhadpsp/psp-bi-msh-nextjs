import bcrypt from "bcrypt";
export default class Hash {
  static make(password: string): string {
    const hash = bcrypt.hashSync(password, 20);
    return hash;
  }
  static verify(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
