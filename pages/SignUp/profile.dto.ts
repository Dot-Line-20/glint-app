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

@ValidatorConstraint({ name: 'isRealDate', async: false })
class RealDate implements ValidatorConstraintInterface {
  validate({ year, month, date }: { [key: string]: string }) {
    const [y, m, d] = [+year, +month, +date]
    return !(
      y < 1900 ||
      y > new Date().getFullYear() ||
      m < 1 ||
      m > 12 ||
      d < 1 ||
      d > new Date(y, m, 0).getDate()
    )
  }
  defaultMessage() {
    return 'Not a Real Date'
  }
}

export default class Profile {
  @IsString()
  @MinLength(1, { message: '이름은 한 글자 이상이어야 해요' })
  @MaxLength(30, { message: '이름은 서른 글자이하야 해요' })
  @Matches(/\w+/, { message: '알파벳과 숫자, _(밑줄)만 포함해야 해요' })
  name!: string

  @IsEmail({},{message: '올바른 이메일이 아니에요'})
  email!: string

  @ValidateNested()
  @Validate(RealDate, {message: '올바른 날짜가 아니에요'})
  birth!: Birth
}

class Birth {
  @IsString()
  year!: string

  @IsString()
  month!: string

  @IsString()
  date!: string
}
