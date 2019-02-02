#!/bin/bash

$(aws ecr get-login --no-include-email --region eu-west-1)

docker build -t smilo/wallet:production -f Dockerfile .
docker tag smilo/wallet:production 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/wallet:production
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/wallet:production