# demo-gzip

## Project pipeline

O projeto poussui duas imagens, uma para desenvolvimento e outro para produção.

A imagem de produção possui a tag `latest` e a imagem de produção possui a tag referente a tag de versão do código no repositório.

### development.yaml

O pipeline `development.yaml` faz o build da imagem `latest` e é acionado com um `push` na branch `main`:

A imagem é registrada no repositório de imagem:

`registry/project-gzip:latest`

### production.yaml

O pipeline `production.yaml` faz o build da imagem `code-version` e é acionado quando ocorre um push com tag idependende da branch:

A imagem é registrada no repositório de imagem:

`registry/project-gzip:v0.0.1`


