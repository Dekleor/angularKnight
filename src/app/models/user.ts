export class User {
  get id(): number {
    return this.$id;
  }

  set id(value: number) {
    this.$id = value;
  }

  get username(): string {
    return this.$username;
  }

  set username(value: string) {
    this.$username = value;
  }

  get roles(): any {
    return this.$roles;
  }

  set roles(value: any) {
    this.$roles = value;
  }

  get password(): string {
    return this.$password;
  }

  set password(value: string) {
    this.$password = value;
  }
  constructor(private $id: number,
              private $username: string,
              private $roles: any,
              private $password: string
              ) {
  }
}
