import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class IdNotRequiredDto {
    @ApiPropertyOptional()
    id?: string;
}
export class IdRequiredDto {
    @ApiProperty()
    id: string;
}