#!/bin/bash

set -x # print commands
set -e # fail fast

if [[ "${opsmgr_url}X" == "X" ]]; then
  echo "upload-product.sh requires \$opsmgr_url, \$opsmgr_username, \$opsmgr_password"
  exit 1
fi

./tile/ci/tasks/upload-product-opsmgr17.sh
