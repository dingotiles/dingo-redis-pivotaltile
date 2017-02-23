#!/bin/bash

set -x # print commands
set -e # fail fast

./tile/ci/tasks/upload-stemcell-opsmgr17.sh
