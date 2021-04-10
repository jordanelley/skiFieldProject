#!/bin/bash -l
set -e
aws cloudformation deploy --stack-name skifield-infrastucture --template-file ./cloudformation-templates/infrastructure.yaml --parameter-overrides FrontendBucketName=skifield-frontend
