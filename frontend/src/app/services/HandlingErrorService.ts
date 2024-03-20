export default class HandlingErrorService {
    static getShortError (message: string): string {
        if (message === 'Connector not connected.'){
            return 'Primeiro você deve fazer login'
        }
        const errorMessage = message.replace(/^.*?:\s*/, '');
        if (errorMessage === 'User rejected the request.') {
            return 'Cancelado pelo usuário'
        }
        return errorMessage;
    }
}