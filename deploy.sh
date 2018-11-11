#!/usr/bin/env bash

npm run build
aws s3 rm s3://jurtle.net --recursive --profile myp
aws s3 sync ./build s3://jurtle.net --profile myp
