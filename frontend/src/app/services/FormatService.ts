export default class FormatService {
  static formatScore(number: number): string {
    return number > 0 ? number.toFixed(2).replace(".", ",") : "0,00";
  }

  static formatAddress(address: string | null, chars?: number): string {
    if (!address) return "";
    if (address.length < 10) {
      return "";
    }
    return (
      address.slice(0, chars ?? 6) +
      "..." +
      address.slice(chars ? -1 * chars : -5)
    );
  }
}
