#!/bin/sh

echo "Verificando se o arquivo deployedContracts.ts já foi criado."
while [ ! -f ./generated/.env ]; do
  echo "Aguardando..."
  sleep 1
done

if [ ! -f ./.env ]; then
    cp ./generated/.env .
fi

echo "Arquivo existente. Iniciando servidor"

# npm run build
# npm run start
npm run dev