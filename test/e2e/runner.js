// 1. Start the dev server using production config.
process.env.NODE_ENV = 'testing'

const server = require('../../build/dev-server.js')

server.ready.then(_ => {
    // 2. Run the nightwatch test suite against it.
    // To run in additional browsers:
    //    1. Add an entry in test/e2e/nightwatch.conf.json under "test_settings"
    //    2. Add it to the --env flag below
    // or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
    // For more information on Nightwatch's config file, see:
    // http://nightwatchjs.org/guide#settings-file
    let options = process.argv.slice(2)

    if (options.indexOf('--config') === -1) {
        options = options.concat(['--config', 'test/e2e/nightwatch.conf.js'])
    }

    if (options.indexOf('--env') === -1) {
        options = options.concat(['--env', 'chrome'])
    }

    const spawn = require('cross-spawn')

    const runner = spawn('./node_modules/.bin/nightwatch', options, { stdio: 'inherit' })

    runner.on('exit', code => {
        server.close()

        process.exit(code)
    })

    runner.on('error', error => {
        server.close()

        throw error
    })
})
