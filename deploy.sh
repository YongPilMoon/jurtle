#!/usr/bin/env bash

yarn build
aws s3 rm s3://jurtle.net --recursive --profile myp
aws s3 sync ./build s3://jurtle.net --profile myp
