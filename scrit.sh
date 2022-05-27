#!/bin/bash
echo 'Hello, it`s me'
mkdir papka4
cd papka4
mkdir p1 p2 p3
cd p2
touch F1.txt F2.txt F3.txt F4.json F5.json
mkdir pap1 pap2 pap3
echo 'Создали, посмотрели'
ls -Rl
mv F1.txt pap1
mv F5.json ../p3
echo 'Переместили, посмотрели'
cd ..
ls -Rl

