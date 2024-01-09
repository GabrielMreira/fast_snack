import { Controller } from '@nestjs/common';
import { ComboService } from './combo.service';

@Controller('combo')
export class ComboController {
  constructor(private readonly comboService: ComboService) {}
}
