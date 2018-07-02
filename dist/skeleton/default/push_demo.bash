#!/usr/bin/env bash
node --max-old-space-size=4096 ./node_modules/@angular/cli/bin/ng build --prod --aot
surge -p dist/ —domain dex_moneyexchange.surge.sh/
