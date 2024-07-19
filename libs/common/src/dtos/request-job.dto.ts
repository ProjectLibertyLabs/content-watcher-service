import { IsInt, IsOptional, IsPositive, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ChainWatchOptionsDto } from './chain.watch.dto';

export class ContentSearchRequestDto {
  @IsOptional()
  @IsString()
  clientReferenceId: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'The block number to search (backward) from',
    example: 100,
  })
  startBlock: number;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'The number of blocks to scan (backwards)',
    example: 101,
  })
  blockCount: number;

  @IsOptional()
  @ApiProperty({
    description: 'The schemaIds/dsnpIds to filter by',
  })
  filters: ChainWatchOptionsDto;

  @IsUrl({ require_tld: false })
  webhookUrl: string;
}
