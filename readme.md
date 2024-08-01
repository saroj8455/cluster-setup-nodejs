## Dependency

`npm install --save-dev loadtest`
`npm i -D pm2`

## Start pm2 cluster mode

`npx pm2 start index.js -i max`

## Load test cluster mode

`npx loadtest -n 1200 -c 400 -k http://localhost:3000/heavy`

```logs
 ~/WebstormProjects/ npx loadtest -n 1200 -c 400 -k http://localhost:3000/heavy
Requests: 87 (36%), requests per second: 17, mean latency: 3084.3 ms
Requests: 106 (44%), requests per second: 21, mean latency: 2552 ms
Requests: 95 (40%), requests per second: 19, mean latency: 2493.4 ms
Requests: 120 (50%), requests per second: 24, mean latency: 2021 ms
Requests: 91 (38%), requests per second: 18, mean latency: 2760.8 ms
Requests: 193 (80%), requests per second: 20, mean latency: 7217.1 ms
Requests: 224 (93%), requests per second: 21, mean latency: 7503.9 ms
Requests: 208 (87%), requests per second: 20, mean latency: 7503.5 ms
Requests: 192 (80%), requests per second: 20, mean latency: 7698.4 ms
Requests: 187 (78%), requests per second: 20, mean latency: 7502.2 ms

Target URL:          http://localhost:3000/heavy
Max requests:        1200
Concurrent clients:  2000
Running on cores:    5
Agent:               keepalive

Completed requests:  1200
Total errors:        0
Total time:          11.908 s
Mean latency:        5995.7 ms
Effective rps:       101

Percentage of requests served within a certain time
  50%      5999 ms
  90%      10716 ms
  95%      11317 ms
  99%      11789 ms
 100%      11883 ms (longest request)
```

## pm2 logs

`npx pm2 logs`

## pm2 monitor

`npx pm2 monit`
