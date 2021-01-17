import { Injectable } from '@nestjs/common'
import { Cron, Interval, Timeout } from '@nestjs/schedule'

/**
 * `@Cron` are regular cron jobs
 *
 * `@Interval` To declare that a method should run at a (recurring) specified interval
 *
 * `@Timeout` To declare that a method should run (once) at a specified timeout
 */
@Injectable()
export class WorkerService {
    static count = 0

    times = 50000000

    fact16 = 20922789888000

    factorial(n) {
        if (n === 1) return 1
        return n * this.factorial(n - 1)
    }

    @Cron('60 * * * * *')
    handleCron() {
        WorkerService.count += 1
        console.log(
            `Called every 60 second, current count is ${WorkerService.count}`,
        )

        let ok = true
        for (let i = 0; i < this.times; i++) {
            ok = ok && this.factorial(16) === this.fact16
        }
        console.log(`work finish ${this.times} - ${ok ? 'ok' : 'fail'}`)
    }

    @Interval(100000)
    handleInterval() {
        console.log('Called every 100 seconds')

        let ok = true
        for (let i = 0; i < this.times; i++) {
            ok = ok && this.factorial(16) === this.fact16
        }
        console.log(`work finish ${this.times} - ${ok ? 'ok' : 'fail'}`)
    }

    @Timeout(50000)
    handleTimeout() {
        console.log('Called once after 50 seconds')

        let ok = true
        for (let i = 0; i < this.times; i++) {
            ok = ok && this.factorial(16) === this.fact16
        }
        console.log(`work finish ${this.times} - ${ok ? 'ok' : 'fail'}`)
    }
}
