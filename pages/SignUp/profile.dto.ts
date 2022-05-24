import {
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  ValidateNested,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  Validate,
  Matches,
} from 'class-validator'
import { default as ISO8601Validator } from 'validator/lib/isISO8601'

@ValidatorConstraint({ name: 'isRealDate', async: false })
class RealDate implements ValidatorConstraintInterface {
  public validate(dateArray: string[]): boolean {
    const ISO8601String = dateArray
      .map((n, i) => (i ? this.normalize(n) : n))
      .join('-')

    return (
      ISO8601Validator(ISO8601String) && new Date() > new Date(ISO8601String)
    )
  }

  public defaultMessage(): string {
    return 'Not a Real Date'
  }

  public normalize(text: string): string {
    return ('00' + text).slice(-2)
  }
}

export class Profile {
  @IsString()
  @Matches(/\w+/, { message: '알파벳과 숫자, _(밑줄)만 포함해야 해요' })
  @MaxLength(30, { message: '이름은 서른 글자이하야 해요' })
  @MinLength(1, { message: '이름은 한 글자 이상이어야 해요' })
  public name!: string

  @IsEmail({}, { message: '올바른 이메일이 아니에요' })
  public email!: string

  @Validate(RealDate, { message: '올바른 날짜가 아니에요' })
  public birth!: Array<string>
}
