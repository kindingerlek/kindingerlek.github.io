export class StringUtils {
    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    public static capitalizeAll(str: string): string {
        return str
            .split(' ')
            .map((word) => this.capitalize(word))
            .join(' ')
    }

    public static slugify(text: string): string {
        return text
            .toString()
            .toLowerCase()
            .normalize('NFD') // Normalize to remove diacritics
            .replaceAll(' ', '-') // Replace spaces with -
            .replace(/[^\w\-]+/g, '') // Remove all non-word chars
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, '') // Trim - from end of text
    }

}