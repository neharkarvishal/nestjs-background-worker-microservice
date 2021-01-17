import { Controller } from '@nestjs/common'
import { WorkerService } from './worker.service'

@Controller()
export class WorkerController {
    constructor(private readonly appService: WorkerService) {}
}
