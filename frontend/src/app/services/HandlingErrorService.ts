export default class HandlingErrorService {
    static getShortError (message: string): string {
        if (message === 'Connector not connected.'){
            return 'Conectar wallet'
        }
        const errorMessage = message.replace(/^.*?:\s*/, '');
        return errorMessage;
    }
}