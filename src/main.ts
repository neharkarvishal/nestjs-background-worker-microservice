import 'source-map-support/register'

import { CustomTransportStrategy } from '@nestjs/microservices'
import { NestFactory } from '@nestjs/core'
import { WorkerModule } from './worker.module'

class KeepAliveStrategy implements CustomTransportStrategy {
    closing = false

    close() {
        this.closing = true
    }

    wait() {
        if (!this.closing) {
            setTimeout(() => this.wait, 1000)
        }
    }

    listen(callback) {
        if (!!callback) {
            callback()
            this.wait()
        }

        return
    }
}

async function bootstrap() {
    const workerApp = await NestFactory.createMicroservice(WorkerModule, {
        strategy: new KeepAliveStrategy(),
    })

    await workerApp.listen(() => console.log('listening'))
}

bootstrap()
    .then((app) => app) // eslint-disable-line @typescript-eslint/no-empty-function
    .catch(console.error)
