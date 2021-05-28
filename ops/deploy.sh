#!/bin/bash -l
set -e
aws s3api put-object --bucket skifield-frontend --key index.html --body $1/index.html --cache-control "public" --content-type "text/html; charset=utf-8" >/dev/null
aws s3api put-object --bucket skifield-frontend --key index.js --body $1/index.js --cache-control "public" --content-type "application/javascript" >/dev/null
aws s3 cp $1/images/ s3://skifield-frontend/images/ --recursive
