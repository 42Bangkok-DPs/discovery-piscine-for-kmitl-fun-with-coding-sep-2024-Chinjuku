#!/bin/bash
file_count=$(find . -maxdepth 1 -type f | wc -l)
echo "${file_count}$"
