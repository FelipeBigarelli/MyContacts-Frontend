***
# Anotações
***

## SOP - Same Origin Policy
- Origem: protocolo://domínio:porta
- Saída (onde está fazendo a requisição/onde o front está sendo executado): `http://localhost:3000`
- Destino (onde a requição está chegando): `http://localhost:3000`

- Só pode fazer requisições HTTP usando js se as requisições tiverem o mesmo protocolo, domínio e porta do frontend

- Não cumprir a política -> quebra

- Previne roubo de requisições, dados, etc.
***

## CORS - Cross-Origin Resourse Sharing
- Se a requisição fere a SOP, passa a ser uma request do tipo CORS
- Compartilhamento de recursos entre origens cruzadas
***

## Simple vs Preflighted requests
#### Simple
- Precisa ter algumas condições, sendo:
  - Metodos GET, HEAD e POST (se tem outros, deixa de ser simples)
  - Únicos headers possíveis: Accept, Accept-Language, Content-Language, Content-Type (application/x-www-form-urlencoded, multiform/form-data, text-plain)

#### Preflight
- Métodos podem ser "perigosos"
- Verificar antes de enviar uma requisição se a origem está permitida e o método HTTP ou header está permitido
- Requisição sempre do tipo OPTIONS
***

## Async/Await
- Await: o código abaixo da promise depende da resolução da promise ser executada? Se sim, usar await
