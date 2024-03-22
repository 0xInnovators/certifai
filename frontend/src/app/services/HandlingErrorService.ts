export default class HandlingErrorService {
    static getShortError (message: string): string {
        if (message === 'Connector not connected.'){
            return 'Primeiro você deve fazer login'
        }
        const errorMessage = message.replace(/^.*?:\s*/, '');
        if (errorMessage === 'User rejected the request.') {
            return 'Cancelado pelo usuário'
        }
        if (errorMessage === "An internal error was received."){
            return 'Recebemos um erro interno. Provavelmente o nonce da sua wallet não está de acordo com a blockchain. Pode tentar personalizar o nonce em sua wallet.'
        }
        return errorMessage;
    }
}