1. Logar um usuário e retornar um Bearer Token
    id
    roles

    retorna um token jwt

2. Validar o token de acordo com a request
    decriptografar o token
    retornar as roles e id


            Role = Operador
            Auth Service
                ^
                |
openOrder -> api-gateway  -> orderService