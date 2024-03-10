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
