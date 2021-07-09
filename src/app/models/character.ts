export class Character {
  get division(): string {
    return this.$division;
  }

  set division(value: string) {
    this.$division = value;
  }
  get id(): number {
    return this.$id;
  }

  set id(value: number) {
    this.$id = value;
  }

  get name(): number {
    return this.$name;
  }

  set name(value: number) {
    this.$name = value;
  }

  get background(): string {
    return this.$background;
  }

  set background(value: string) {
    this.$background = value;
  }

  get coatOfArms(): string {
    return this.$coatOfArms;
  }

  set coatOfArms(value: string) {
    this.$coatOfArms = value;
  }

  get portrait(): string {
    return this.$portrait;
  }

  set portrait(value: string) {
    this.$portrait = value;
  }

  get armor(): string {
    return this.$armor;
  }

  set armor(value: string) {
    this.$armor = value;
  }
  constructor(private $id: number,
              private $name: number,
              private $background: string,
              private $coatOfArms: string,
              private $portrait: string,
              private $armor: string,
              private $division: string,
              private $role: string = 'ROLE_USER') {
  }
}
